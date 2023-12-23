package com.example.portfolio.service;

import com.example.portfolio.bean.Formation;
import com.example.portfolio.dao.FormationDao;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormationService {
    @Autowired
    private FormationDao formationDao;

    public List<Formation> findAll() {
        return formationDao.findAll();
    }

    public Formation save(Formation formation ) {
        return formationDao.save(formation);
    }

    public Optional<Formation> findById(Long id) {
        return formationDao.findById(id);
    }

    @Transactional
    public void deleteById(Long id) {
        formationDao.deleteById(id);
    }
}
