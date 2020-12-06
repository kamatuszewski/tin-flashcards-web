package com.kamilmatuszewski.tin.tinflashcardsbackend.controller;

import com.kamilmatuszewski.tin.tinflashcardsbackend.model.User;
import com.kamilmatuszewski.tin.tinflashcardsbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {
  private final UserRepository userRepository;

  @Autowired
  public UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @PostMapping
  public User registerUser(@RequestBody @Valid User user) {
    return userRepository.save(user);
  }
}
