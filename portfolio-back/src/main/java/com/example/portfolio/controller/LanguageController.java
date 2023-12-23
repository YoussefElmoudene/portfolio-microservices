package com.example.portfolio.controller;


import com.example.portfolio.bean.Language;
import com.example.portfolio.service.LanguageService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/language")
public class LanguageController {

    @Autowired
    private LanguageService languageService;

    @GetMapping("/all")
    public List<Language> findAll() {
        return languageService.findAll();
    }

    @PostMapping("/save")
    public Language save(@RequestBody Language language) {
        return languageService.save(language);
    }

    @GetMapping("/find/{id}")
    public Optional<Language> findById(@PathVariable Long id) {
        return languageService.findById(id);
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        languageService.deleteById(id);
    }
}
