package com.messconnect.services;

import java.util.List;

import com.messconnect.entities.MainCourse;

public interface MainCourseService {

	String addNewMainCourse(MainCourse newMainCourse);

	List<MainCourse> getAllMainCourse();

	String deleteMainCourse(Long id);

}
