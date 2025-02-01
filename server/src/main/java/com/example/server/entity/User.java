package com.example.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="users")
public class User {

    @Id
    @Column(name = "userid", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;

    @Column(name="username", length = 255)
    private String username;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "password", length = 255)
    private String password;

}
