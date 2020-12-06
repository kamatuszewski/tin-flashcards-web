package com.kamilmatuszewski.tin.tinflashcardsbackend.model;

import javax.validation.constraints.*;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id_user;

  @NotNull
  private String login;

  @NotNull
  private String password;

  @NotNull
  @Email
  private String email;

  private Date created_at;
  private Date updated_at;

  @PrePersist
  void createdAt() {
    this.created_at = this.updated_at = new Date();
  }

  @PreUpdate
  void updatedAt() {
    this.updated_at = new Date();
  }
}
