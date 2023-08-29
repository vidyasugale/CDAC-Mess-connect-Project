package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Rice;
import com.messconnect.repositories.RiceRepository;

@Service
@Transactional
public class RiceServiceImpl implements RiceService {

	@Autowired
	private RiceRepository riceRepository;

	/*
	 * To add new rice to the system
	 * 
	 * @param newRice of Rice type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
	 */
	@Override
	public String addNewRice(Rice newRice) {
		Rice persistentRice = riceRepository.save(newRice);
		return persistentRice.getName() + " added to database!!";
	}

	/*
	 * To get all Rices from the system
	 * 
	 * @return List of Rice
	 * 
	 */
	@Override
	public List<Rice> getAllRice() {
		List<Rice> rList = riceRepository.findAll();
		return rList;
	}

	/*
	 * To delete one Rice from the system
	 * 
	 * @param id of Long type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */

	@Override
	public String deleteRice(Long id) {
		riceRepository.deleteById(id);
		return "rice deleted Successfully!!";
	}

}
