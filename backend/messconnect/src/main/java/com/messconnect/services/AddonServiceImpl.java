package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.AddOn;
import com.messconnect.repositories.AddonRepository;

@Service
@Transactional
public class AddonServiceImpl implements AddonService {

	@Autowired
	private AddonRepository addonRepository;

	@Override
	public List<AddOn> getallAddonsData() {
		List<AddOn> adList = addonRepository.findAll();
		return adList;
	}

	@Override
	public String addNewAddon(AddOn newAddon) {
		AddOn persistentAddon = addonRepository.save(newAddon);
		return persistentAddon.getName() + " added to database!!";
	}

}
