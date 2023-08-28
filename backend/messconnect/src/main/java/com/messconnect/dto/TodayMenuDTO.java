package com.messconnect.dto;

import java.util.List;

import com.messconnect.entities.AddOn;
import com.messconnect.entities.Menu;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TodayMenuDTO {

	private List<Menu> menu;
	private List<AddOn> addons;

}
