package com.example.portfolio;

import com.example.portfolio.auth.AuthenticationService;
import com.example.portfolio.auth.RegisterRequest;
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

    @PostConstruct
    public void create() {
        RegisterRequest user = new RegisterRequest();
        user.setEmail("admin@gmail.com");
        user.setUsername("admin@gmail.com");
        user.setFirstname("admin");
        user.setLastname("admin");
        user.setPassword("admin");
//        authenticationService.register(user);
    }

}
