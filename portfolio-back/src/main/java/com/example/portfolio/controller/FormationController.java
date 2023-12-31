package com.example.portfolio.controller;

import com.example.portfolio.bean.Formation;
import com.example.portfolio.service.FormationService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/formation")
@CrossOrigin
public class FormationController {

    @Autowired
    private FormationService formationService;

    @GetMapping("/all")
    public List<Formation> findAll() {
        return formationService.findAll();
    }

    @PostMapping("/save")
    public Formation save(@RequestBody Formation formation) {
        return formationService.save(formation);
    }

    @GetMapping("/find/{id}")
    public Optional<Formation> findById(@PathVariable Long id) {
        return formationService.findById(id);
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        formationService.deleteById(id);
    }
}
