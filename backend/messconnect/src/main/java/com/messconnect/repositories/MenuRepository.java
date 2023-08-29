package com.messconnect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.messconnect.entities.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {

	List<Menu> findByActive(boolean active);

	@Modifying
	@Query("UPDATE Menu m SET m.active = false WHERE m.active = true")
	void deactivateAll();

	@Modifying
	@Query("UPDATE Menu m SET m.active = true WHERE m.id IN (:ids)")
	void activateByIds(List<Long> ids);
}
