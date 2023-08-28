package com.messconnect.dto;

import com.messconnect.entities.Bread;
import com.messconnect.entities.Curry;
import com.messconnect.entities.MainCourse;
import com.messconnect.entities.Rice;
import com.messconnect.entities.Sweet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuDTO {

	private String name;
	private double price;
	private Sweet sweet;
	private Rice rice;
	private Curry curry;
	private Bread bread;
	private MainCourse mainCourse;
}
