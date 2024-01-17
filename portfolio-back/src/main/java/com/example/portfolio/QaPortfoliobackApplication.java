package com.example.portfolio;

import com.example.portfolio.auth.AuthenticationService;
import com.example.portfolio.bean.Role;
import com.example.portfolio.bean.User;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QaPortfoliobackApplication {

    @Autowired
    private AuthenticationService authenticationService;

    public static void main(String[] args) {
        SpringApplication.run(QaPortfoliobackApplication.class, args);
    }

//    @PostConstruct
    public void create() {
        User user = new User();
        user.setEmail("admin@gmail.com");
        user.setUsername("admin@gmail.com");
        user.setFirstName("admin");
        user.setLastName("admin");
        user.setPassword("admin");
        user.setRole(Role.ADMIN_ROLE.toString());
        authenticationService.register(user);
    }
}
