package com.messconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.messconnect.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
