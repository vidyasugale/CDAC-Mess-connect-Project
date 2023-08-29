package com.messconnect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.messconnect.entities.AddOn;

public interface AddonRepository extends JpaRepository<AddOn, Long> {

	List<AddOn> findByActive(boolean active);

	@Modifying
	@Query("UPDATE AddOn ao SET ao.active = false WHERE ao.active = true")
	void deactivateAll();

	@Modifying
	@Query("UPDATE AddOn ao SET ao.active = true WHERE ao.id IN (:ids)")
	void activateByIds(List<Long> ids);

}
