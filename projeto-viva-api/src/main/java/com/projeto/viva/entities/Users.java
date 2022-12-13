package com.projeto.viva.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "USERS")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String password;
}
