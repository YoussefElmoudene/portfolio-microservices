package com.example.portfolio.bean;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String school;
    private Date startDate;
    private Date endDate;
    @ManyToOne
    private User user;
}
