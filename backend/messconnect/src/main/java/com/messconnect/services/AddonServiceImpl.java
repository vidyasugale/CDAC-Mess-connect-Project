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

	/*
	 * To get all AddOns from the system
	 * 
	 * @return List of AddOn
	 * 
	 */
	@Override
	public List<AddOn> getallAddonsData() {
		List<AddOn> adList = addonRepository.findAll();
		return adList;
	}

	/*
	 * To add new AddOn to the system
	 * 
	 * @param newAddon of AddOn type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
	 */
	@Override
	public String addNewAddon(AddOn newAddon) {
		AddOn persistentAddon = addonRepository.save(newAddon);
		return persistentAddon.getName() + " added to database!!";
	}

	/*
	 * To change active status to true of selected id the system
	 * 
	 * @param activeAddons List of id of Long type
	 * 
	 * @return String massage
	 */
	@Override
	public String activateTodayAddon(List<Long> activeAddons) {
		addonRepository.deactivateAll();
		addonRepository.activateByIds(activeAddons);
		return "Taodays addons added!!!";
	}

}
