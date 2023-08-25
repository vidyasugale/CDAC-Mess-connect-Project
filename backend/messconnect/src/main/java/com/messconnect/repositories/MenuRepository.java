package com.messconnect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.messconnect.entities.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {

	List<Menu> findByActive(boolean active);
}
