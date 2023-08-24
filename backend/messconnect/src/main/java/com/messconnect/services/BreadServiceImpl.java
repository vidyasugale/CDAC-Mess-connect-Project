package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Bread;
import com.messconnect.repositories.BreadRepository;

@Service
@Transactional
public class BreadServiceImpl implements BreadService{

	@Autowired
	private BreadRepository breadRepository;

	@Override
	public String addNewBread(Bread newBread) {
		Bread persistentBread=breadRepository.save(newBread);
		return persistentBread.getName() + " added to database!!";
	}

	@Override
	public List<Bread> getAllBreads() {
		List<Bread> bList=breadRepository.findAll();
		return bList;
	}

	@Override
	public String deleteBread(Long id) {
		breadRepository.deleteById(id);
		return "Bread deleted Successfully!!";
	}
}
