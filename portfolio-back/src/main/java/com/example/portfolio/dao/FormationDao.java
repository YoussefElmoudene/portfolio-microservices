package com.example.portfolio.dao;

import com.example.portfolio.bean.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormationDao extends JpaRepository<Formation,Long> {
}
