package com.example.portfolio.service;

import com.example.portfolio.bean.Skills;
import com.example.portfolio.dao.SkillsDao;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillsService {
    @Autowired
    private SkillsDao skillsDao;

    public List<Skills> findAll() {
        return skillsDao.findAll();
    }

    public Skills save(Skills skills ) {
        return skillsDao.save(skills);
    }

    public Optional<Skills> findById(Long id) {
        return skillsDao.findById(id);
    }

    @Transactional
    public void deleteById(Long id) {
        skillsDao.deleteById(id);
    }
}
