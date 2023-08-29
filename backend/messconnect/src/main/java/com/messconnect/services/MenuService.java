package com.messconnect.services;

import java.util.List;

import com.messconnect.dto.AllItemsDTO;
import com.messconnect.entities.Menu;

public interface MenuService {

	List<Menu> getAllMenuData();

	AllItemsDTO getAllItemsData();

	String addNewMenu(Menu newMenu);

	String activateTodayMenu(List<Long> activeMenus);

}
