package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Sweet;
import com.messconnect.repositories.SweetRepository;


@Service
@Transactional
public class SweetServiceImpl implements SweetService{
	
	
	@Autowired
	private SweetRepository sweetRepository;

	@Override
	public String addNewSweet(Sweet newSweet) {
	Sweet persistentSweet=sweetRepository.save(newSweet);
	return persistentSweet.getName() + " added to database!!";
	}

	@Override
	public List<Sweet> getAllSweets() {
    List<Sweet> sList=sweetRepository.findAll();
	return sList;
	}

	@Override
	public String deleteSweet(Long id) {
	sweetRepository.deleteById(id);
	return "Sweet deleted Successfully!!";
	}

}
