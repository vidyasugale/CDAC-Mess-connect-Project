package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Sweet;
import com.messconnect.repositories.SweetRepository;

@Service
@Transactional
public class SweetServiceImpl implements SweetService {

	@Autowired
	private SweetRepository sweetRepository;

	/*
	 * To add new sweet to the system
	 * 
	 * @param newSweet of Sweet type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
	 */
	@Override
	public String addNewSweet(Sweet newSweet) {
		Sweet persistentSweet = sweetRepository.save(newSweet);
		return persistentSweet.getName() + " added to database!!";
	}

	/*
	 * To get all Sweets from the system
	 * 
	 * @return List of Sweet
	 * 
	 */
	@Override
	public List<Sweet> getAllSweets() {
		List<Sweet> sList = sweetRepository.findAll();
		return sList;
	}

	/*
	 * To delete one Sweet from the system
	 * 
	 * @param id of Long type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */
	@Override
	public String deleteSweet(Long id) {
		sweetRepository.deleteById(id);
		return "Sweet deleted Successfully!!";
	}

}
