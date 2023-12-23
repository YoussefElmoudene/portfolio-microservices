package com.example.portfolio.dao;

import com.example.portfolio.bean.Role;
import com.example.portfolio.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDao extends JpaRepository<User,Integer> {
    User findUserByUsername(String username);
    Optional<User> findByEmail(String email);
    List<User> findAll();

    List<User> findByRole(Role role);
}
