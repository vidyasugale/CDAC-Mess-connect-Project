package com.messconnect.services;

import java.util.List;

import com.messconnect.entities.Curry;

public interface CurryService {

	String addNewRice(Curry newCurry);

	List<Curry> getAllCuries();

	String deleteCurry(Long id);

}
