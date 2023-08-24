package com.messconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.messconnect.entities.Sweet;


public interface SweetRepository extends JpaRepository<Sweet, Long> {

}
