package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.customException.ResourceNotFoundException;
import com.messconnect.dto.UserDTO2;
import com.messconnect.entities.Balance;
import com.messconnect.entities.Order;
import com.messconnect.entities.Role;
import com.messconnect.entities.User;
import com.messconnect.repositories.BalanceRepository;
import com.messconnect.repositories.OrderRepository;
import com.messconnect.repositories.UserRepository;

import jakarta.validation.Valid;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BalanceRepository balanceRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private OrderRepository orderRepository;

	/*
	 * Adds user
	 * 
	 * @param newUser
	 * 
	 * @return
	 * 
	 * @throws
	 */
	@Override
	public String addUser(User newUser) {
		newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
		User persistentUser = userRepository.save(newUser);
		if (persistentUser.getRole() == Role.valueOf("ROLE_CUSTOMER")) {
			balanceRepository.save(new Balance(persistentUser, 0.0));
		}
		return persistentUser.getFirstName() + " added to database!!!";
	}

	@Override
	public User getUser(Long userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"));
		return user;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> uList = userRepository.findAll();
		return uList;
	}

	@Override
	public String deleteUser(Long id) {
		userRepository.deleteById(id);
		return "User deleted Successfully!!";
	}

	@Override
	public double getUserBalance(Long userId) {
		double b = (balanceRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"))).getBalance();
		return b;
	}

	@Override
	public List<Order> getUserOrders(Long userId) {
		List<Order> oList = orderRepository.findOrderByUserId(userId);
		return oList;
	}

	@Override
	public User updateUserProfile(@Valid UserDTO2 user, Long userId) {
		User updatedUser = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User !!! Can not upadate details"));
		updatedUser.setFirstName(user.getFirstName());
		updatedUser.setLastName(user.getLastName());
		updatedUser.setAddress(user.getAddress());
		updatedUser.setPhone(user.getPhone());
		return updatedUser;
	}

}
