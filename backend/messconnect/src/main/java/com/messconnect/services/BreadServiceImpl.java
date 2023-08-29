package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Bread;
import com.messconnect.repositories.BreadRepository;

@Service
@Transactional
public class BreadServiceImpl implements BreadService {

	@Autowired
	private BreadRepository breadRepository;

	/*
	 * To add new bread to the system
	 * 
	 * @param newBread of Bread type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
	 */
	@Override
	public String addNewBread(Bread newBread) {
		Bread persistentBread = breadRepository.save(newBread);
		return persistentBread.getName() + " added to database!!";
	}

	/*
	 * To get all Bread from the system
	 * 
	 * @return List of Bread
	 * 
	 */
	@Override
	public List<Bread> getAllBreads() {
		List<Bread> bList = breadRepository.findAll();
		return bList;
	}

	/*
	 * To delete one Bread from the system
	 * 
	 * @param id of Long type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */

	@Override
	public String deleteBread(Long id) {
		breadRepository.deleteById(id);
		return "Bread deleted Successfully!!";
	}
}
