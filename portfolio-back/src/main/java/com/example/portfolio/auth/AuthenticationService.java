package com.example.portfolio.auth;

import com.example.portfolio.bean.Role;
import com.example.portfolio.bean.User;
import com.example.portfolio.config.JwtService;
import com.example.portfolio.dao.*;
import com.example.portfolio.token.Token;
import com.example.portfolio.token.TokenRepository;
import com.example.portfolio.token.TokenType;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserDao repository;
    private final SkillsDao skillsDao;
    private final ExperienceDao experienceDao;
    private final FormationDao formationDao;
    private final LanguageDao languageDao;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public User register(User request) {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getEmail())
                .email(request.getEmail())
                .tel(request.getTel())
                .title(request.getTitle())
                .formations(request.getFormations())
                .skillsList(request.getSkillsList())
                .experiences(request.getExperiences())
                .languages(request.getLanguages())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(String.valueOf(Role.USER_ROLE)).build();
        var savedUser = repository.save(user);
        //save skills
        request.getSkillsList().forEach(s -> {
            s.setUser(savedUser);
        });
        this.skillsDao.saveAll(request.getSkillsList());

        //save formations
        request.getFormations().forEach(s -> {
            s.setUser(savedUser);
        });
        this.formationDao.saveAll(request.getFormations());

        //save exps
        request.getExperiences().forEach(s -> {
            s.setUser(savedUser);
        });
        this.experienceDao.saveAll(request.getExperiences());

        //save languages
        request.getLanguages().forEach(s -> {
            s.setUser(savedUser);
        });
        this.languageDao.saveAll(request.getLanguages());
        var jwtToken = jwtService.generateToken(savedUser);
        var refreshToken = jwtService.generateRefreshToken(savedUser);
        saveUserToken(savedUser, jwtToken);
        return savedUser;
    }


    public User authenticate(AuthenticationRequest request) {
        ObjectMapper objectMapper = new ObjectMapper();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return user;
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder().user(user).token(jwtToken).tokenType(TokenType.TEST).expired(false).revoked(false).build();
        // tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty()) return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith("TEST")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);
        if (userEmail != null) {
            var user = this.repository.findByEmail(userEmail).orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                var authResponse = AuthenticationResponse.builder().accessToken(accessToken).refreshToken(refreshToken).build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
}
