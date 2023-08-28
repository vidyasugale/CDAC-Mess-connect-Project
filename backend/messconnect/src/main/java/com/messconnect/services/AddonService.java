package com.messconnect.services;

import java.util.List;

import com.messconnect.entities.AddOn;

public interface AddonService {

	List<AddOn> getallAddonsData();

	String addNewAddon(AddOn newAddon);

}
