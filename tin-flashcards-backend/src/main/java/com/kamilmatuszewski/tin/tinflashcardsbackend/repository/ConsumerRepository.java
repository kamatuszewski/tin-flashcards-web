package com.kamilmatuszewski.tin.tinflashcardsbackend.repository;

import com.kamilmatuszewski.tin.tinflashcardsbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
