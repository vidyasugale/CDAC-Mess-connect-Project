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

	@Override
	public String addNewMainCourse(MainCourse newMainCourse) {
		MainCourse persistentMainCourse=mainCourseRepository.save(newMainCourse);
		return persistentMainCourse.getName() + " added to database!!";
	}

	@Override
	public List<MainCourse> getAllMainCourse() {
		List<MainCourse> mcList=mainCourseRepository.findAll();
		return mcList;
	}

	@Override
	public String deleteMainCourse(Long id) {
		mainCourseRepository.deleteById(id);
		return "Main-Course deleted Successfully!!";
	}
}
