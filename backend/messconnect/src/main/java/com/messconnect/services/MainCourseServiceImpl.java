package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.entities.MainCourse;
import com.messconnect.repositories.MainCourseRepository;

@Service
@Transactional
public class MainCourseServiceImpl implements MainCourseService {

	@Autowired
	private MainCourseRepository mainCourseRepository;

	/*
	 * To add new MainCourse to the system
	 * 
	 * @param newMainCourse of MainCourse type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
	 */
	@Override
	public String addNewMainCourse(MainCourse newMainCourse) {
		MainCourse persistentMainCourse = mainCourseRepository.save(newMainCourse);
		return persistentMainCourse.getName() + " added to database!!";
	}

	/*
	 * To get all MainCourse from the system
	 * 
	 * @return List of MainCourse
	 * 
	 */
	@Override
	public List<MainCourse> getAllMainCourse() {
		List<MainCourse> mcList = mainCourseRepository.findAll();
		return mcList;
	}

	/*
	 * To delete one MainCourse from the system
	 * 
	 * @param id of Long type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */
	@Override
	public String deleteMainCourse(Long id) {
		mainCourseRepository.deleteById(id);
		return "Main-Course deleted Successfully!!";
	}
}
