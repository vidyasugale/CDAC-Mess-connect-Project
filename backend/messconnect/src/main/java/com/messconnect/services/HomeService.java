package com.messconnect.services;

import java.util.List;

import com.messconnect.dto.SigninUser;
import com.messconnect.dto.TodayMenuDTO;
import com.messconnect.entities.Menu;

public interface HomeService {

	Object authenticate(SigninUser request);

	List<Menu> getHomeData();

	TodayMenuDTO getTodayMenuData();

}
