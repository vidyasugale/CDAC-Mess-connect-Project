package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.dto.AllItemsDTO;
import com.messconnect.entities.Menu;
import com.messconnect.repositories.BreadRepository;
import com.messconnect.repositories.CurryRepository;
import com.messconnect.repositories.MainCourseRepository;
import com.messconnect.repositories.MenuRepository;
import com.messconnect.repositories.RiceRepository;
import com.messconnect.repositories.SweetRepository;

@Service
@Transactional
public class MenuServiceImpl implements MenuService {

	@Autowired
	private MenuRepository menuRepository;
	@Autowired
	private BreadRepository breadRepository;
	@Autowired
	private RiceRepository riceRepository;
	@Autowired
	private CurryRepository curryRepository;
	@Autowired
	private MainCourseRepository mainCourseRepository;
	@Autowired
	private SweetRepository sweetRepository;

	@Override
	public List<Menu> getAllMenuData() {
		List<Menu> mList = menuRepository.findAll();
		return mList;
	}

	@Override
	public AllItemsDTO getAllItemsData() {
		AllItemsDTO object = new AllItemsDTO(breadRepository.findAll(), riceRepository.findAll(),
				mainCourseRepository.findAll(), sweetRepository.findAll(), curryRepository.findAll());
		return object;
	}

	@Override
	public String addNewMenu(Menu newMenu) {
		Menu persistentMenu = menuRepository.save(newMenu);
		return persistentMenu.getName() + " added to database!!";
	}

}
