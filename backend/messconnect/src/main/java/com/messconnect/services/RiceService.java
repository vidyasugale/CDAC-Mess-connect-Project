package com.messconnect.services;

import java.util.List;

import com.messconnect.entities.Rice;

public interface RiceService {

	String addNewRice(Rice newRice);

	List<Rice> getAllRice();

	String deleteRice(Long id);

}
