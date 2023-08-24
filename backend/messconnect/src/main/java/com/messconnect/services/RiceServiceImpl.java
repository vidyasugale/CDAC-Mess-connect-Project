package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Rice;
import com.messconnect.repositories.RiceRepository;

@Service
@Transactional
public class RiceServiceImpl implements RiceService{
	
	@Autowired
	private RiceRepository riceRepository;

	@Override
	public String addNewRice(Rice newRice) {
		Rice persistentRice=riceRepository.save(newRice);
		return persistentRice.getName() + " added to database!!";
	}

	@Override
	public List<Rice> getAllRice() {
		List<Rice> rList=riceRepository.findAll();
		return rList;
	}

	@Override
	public String deleteRice(Long id) {
		riceRepository.deleteById(id);
		return "rice deleted Successfully!!";
	}

}
