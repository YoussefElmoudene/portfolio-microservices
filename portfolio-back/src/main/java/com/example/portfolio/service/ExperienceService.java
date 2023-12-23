package com.example.portfolio.service;

import com.example.portfolio.bean.Experience;
import com.example.portfolio.dao.ExperienceDao;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienceService {
    @Autowired
    private ExperienceDao experienceDao;

    public List<Experience> findAll() {
        return experienceDao.findAll();
    }

    public Experience save(Experience experience ) {
        return experienceDao.save(experience);
    }

    public Optional<Experience> findById(Long id) {
        return experienceDao.findById(id);
    }

    @Transactional
    public void deleteById(Long id) {
        experienceDao.deleteById(id);
    }
}
