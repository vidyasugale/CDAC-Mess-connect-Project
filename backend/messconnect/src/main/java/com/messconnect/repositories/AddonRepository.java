package com.messconnect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.messconnect.entities.AddOn;

public interface AddonRepository extends JpaRepository<AddOn, Long> {

	List<AddOn> findByActive(boolean active);

}
