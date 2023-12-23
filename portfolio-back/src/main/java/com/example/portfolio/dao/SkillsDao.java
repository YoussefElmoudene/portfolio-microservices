package com.example.portfolio.dao;

import com.example.portfolio.bean.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsDao extends JpaRepository<Skills,Long> {
}
