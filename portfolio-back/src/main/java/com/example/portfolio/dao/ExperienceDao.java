package com.example.portfolio.dao;

import com.example.portfolio.bean.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceDao extends JpaRepository<Experience,Long> {
}
