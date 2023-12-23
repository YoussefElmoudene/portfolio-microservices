package com.example.portfolio.dao;

import com.example.portfolio.bean.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageDao extends JpaRepository<Language,Long> {
}
