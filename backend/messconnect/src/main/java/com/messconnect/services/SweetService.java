package com.messconnect.services;

import java.util.List;

import com.messconnect.entities.Sweet;

public interface SweetService {

	String addNewSweet(Sweet newSweet);

	List<Sweet> getAllSweets();

	String deleteSweet(Long id);

}
