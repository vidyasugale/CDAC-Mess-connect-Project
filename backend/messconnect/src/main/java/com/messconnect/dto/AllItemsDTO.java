package com.messconnect.dto;

import java.util.List;

import com.messconnect.entities.Bread;
import com.messconnect.entities.Curry;
import com.messconnect.entities.MainCourse;
import com.messconnect.entities.Rice;
import com.messconnect.entities.Sweet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
public class AllItemsDTO {
	private List<Bread> breads;
	private List<Rice> rices;
	private List<MainCourse> mainCourses;
	private List<Sweet> sweets;
	private List<Curry> curries;

}
