package com.example.portfolio.controller;

import com.example.portfolio.bean.Skills;
import com.example.portfolio.service.SkillsService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/skills")
public class SkillsController {

    @Autowired
    private SkillsService skillsService;

    @GetMapping("/all")
    public List<Skills> findAll() {
        return skillsService.findAll();
    }

    @PostMapping("/save")
    public Skills save(@RequestBody Skills skills) {
        return skillsService.save(skills);
    }

    @GetMapping("/find/{id}")
    public Optional<Skills> findById(@PathVariable Long id) {
        return skillsService.findById(id);
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        skillsService.deleteById(id);
    }
}

