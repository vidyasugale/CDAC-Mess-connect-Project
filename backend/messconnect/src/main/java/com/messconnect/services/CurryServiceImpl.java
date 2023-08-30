package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Curry;
import com.messconnect.repositories.CurryRepository;

@Service
@Transactional
public class CurryServiceImpl implements CurryService {

	@Autowired
	private CurryRepository curryRepository;

	/*
	 * To add new curry to the system
	 * 
	 * @param newCurry of Curry type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
	 */
	@Override
	public String addNewRice(Curry newCurry) {
		Curry persistentCurry = curryRepository.save(newCurry);
		return persistentCurry.getName() + " added to database!!";
	}

	/*
	 * To get all Curry from the system
	 * 
	 * @return List of Curry
	 * 
	 */
	@Override
	public List<Curry> getAllCuries() {
		List<Curry> cList = curryRepository.findAll();
		return cList;
	}

	/*
	 * To delete one Curry from the system
	 * 
	 * @param id of Long type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */

	@Override
	public String deleteCurry(Long id) {
		curryRepository.deleteById(id);
		return "Curry deleted Successfully!!";
	}
}
