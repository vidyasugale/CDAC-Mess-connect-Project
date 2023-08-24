package com.messconnect.services;

import java.util.List;

import com.messconnect.entities.Bread;

public interface BreadService {

	String addNewBread(Bread newBread);

	List<Bread> getAllBreads();

	String deleteBread(Long id);

}
