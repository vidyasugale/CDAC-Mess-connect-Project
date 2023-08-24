package com.messconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.messconnect.entities.Bread;

public interface BreadRepository extends JpaRepository<Bread, Long> {

}
