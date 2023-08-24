package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.Curry;
import com.messconnect.repositories.CurryRepository;

@Service
@Transactional
public class CurryServiceImpl  implements CurryService{

	@Autowired
	private CurryRepository curryRepository;

	@Override
	public String addNewRice(Curry newCurry) {
		Curry persistentCurry=curryRepository.save(newCurry);
		return persistentCurry.getName() + " added to database!!";
	}

	@Override
	public List<Curry> getAllCuries() {
		List<Curry> cList=curryRepository.findAll();
		return cList;
	}

	@Override
	public String deleteCurry(Long id) {
		curryRepository.deleteById(id);
		return "Curry deleted Successfully!!";
	}
}
