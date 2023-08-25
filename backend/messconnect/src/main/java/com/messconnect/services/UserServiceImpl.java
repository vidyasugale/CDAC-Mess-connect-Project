package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.customException.ResourceNotFoundException;
import com.messconnect.entities.Balance;
import com.messconnect.entities.Role;
import com.messconnect.entities.User;
import com.messconnect.repositories.BalanceRepository;
import com.messconnect.repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BalanceRepository balanceRepository;

	/*
	 * Adds user
	 * @param newUser
	 * @return
	 * @throws
	 */
	@Override
	public String addUser(User newUser) {
		User persistentUser=userRepository.save(newUser);
		if(persistentUser.getRole()==Role.valueOf("ROLE_CUSTOMER")) {
		balanceRepository.save(new Balance(persistentUser,0.0));
		}
		return persistentUser.getFirstName() + "added to database!!!";
	}

	@Override
	public User getUser(Long userId) {
		User user=userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"));
		return user;
		}

	@Override
	public List<User> getAllUsers() {
	    List<User> uList=userRepository.findAll();
		return uList;
	}

	@Override
	public String deleteUser(Long id) {
		userRepository.deleteById(id);
		return "User deleted Successfully!!";
	}
	
}
