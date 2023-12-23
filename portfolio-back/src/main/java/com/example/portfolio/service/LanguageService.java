package com.example.portfolio.service;

import com.example.portfolio.bean.Language;
import com.example.portfolio.dao.LanguageDao;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LanguageService {
    @Autowired
    private LanguageDao languageDao;

    public List<Language> findAll() {
        return languageDao.findAll();
    }

    public Language save(Language language ) {
        return languageDao.save(language);
    }

    public Optional<Language> findById(Long id) {
        return languageDao.findById(id);
    }

    @Transactional
    public void deleteById(Long id) {
        languageDao.deleteById(id);
    }
}
