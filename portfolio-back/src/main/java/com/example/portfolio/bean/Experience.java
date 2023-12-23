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
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String company;
    private Date startDate;
    private Date endDate;
    @ManyToOne
    private User user;
}
