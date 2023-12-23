package com.example.portfolio.controller;

import com.example.portfolio.bean.Experience;
import com.example.portfolio.service.ExperienceService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/experience")
public class ExperienceController {

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/all")
    public List<Experience> findAll() {
        return experienceService.findAll();
    }

    @PostMapping("/save")
    public Experience save(@RequestBody Experience experience) {
        return experienceService.save(experience);
    }

    @GetMapping("/find/{id}")
    public Optional<Experience> findById(@PathVariable Long id) {
        return experienceService.findById(id);
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        experienceService.deleteById(id);
    }
}
