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

	/*
	 * To get all Menu from the system
	 * 
	 * @return List of Menu
	 */
	@Override
	public List<Menu> getAllMenuData() {
		List<Menu> mList = menuRepository.findAll();
		return mList;
	}

	/*
	 * To get all items of food from the system
	 * 
	 * @return AllItemDTO containing Lists
	 */
	@Override
	public AllItemsDTO getAllItemsData() {
		AllItemsDTO object = new AllItemsDTO(breadRepository.findAll(), riceRepository.findAll(),
				mainCourseRepository.findAll(), sweetRepository.findAll(), curryRepository.findAll());
		return object;
	}

	/*
	 * To add new Menu to the system
	 * 
	 * @param newMenu of Menu type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
	 */
	@Override
	public String addNewMenu(Menu newMenu) {
		Menu persistentMenu = menuRepository.save(newMenu);
		return persistentMenu.getName() + " added to database!!";
	}

	/*
	 * To change active status to true of selected id the system
	 * 
	 * @param activeMenus List of id of Long type
	 * 
	 * @return String massage
	 */
	@Override
	public String activateTodayMenu(List<Long> activeMenus) {
		menuRepository.deactivateAll();
		menuRepository.activateByIds(activeMenus);
		return "Taodays menu added!!!";
	}

}
