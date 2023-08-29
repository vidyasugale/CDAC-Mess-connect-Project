package com.messconnect.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.customException.ResourceNotFoundException;
import com.messconnect.dto.OrderViewDTO;
import com.messconnect.dto.SigninUserResp;
import com.messconnect.dto.UserDTO2;
import com.messconnect.entities.AddOn;
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

	@Autowired
	private ModelMapper mapper;

	/*
	 * Adds a new user to the system
	 * 
	 * @param newUser The user object to be added
	 * 
	 * @return name of user and message if successful
	 * 
	 * @throws IllegalArgumentException - in case the given entity is null.
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

	/*
	 * To get one user from the system
	 * 
	 * @param userId of Long type
	 * 
	 * @return user of User type
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */
	@Override
	public User getUser(Long userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"));
		return user;
	}

	/*
	 * To get all users from the system
	 * 
	 * @return List of User type
	 */
	@Override
	public List<User> getAllUsers() {
		List<User> uList = userRepository.findAll();
		return uList;
	}

	/*
	 * To delete one user from the system
	 * 
	 * @param userId of Long type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */
	@Override
	public String deleteUser(Long id) {
		orderRepository.deleteByUserId(id);
		balanceRepository.deleteById(id);
		userRepository.deleteById(id);
		return "User deleted Successfully!!";
	}

	/*
	 * To get balance of user from the system
	 * 
	 * @param userId of Long type
	 * 
	 * @return balance of user in double type
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 * 
	 * @throws ResourceNotFoundException - if id is invalid.
	 */
	@Override
	public double getUserBalance(Long userId) {
		double b = (balanceRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"))).getBalance();
		return b;
	}

	/*
	 * To get all user orders from the system
	 * 
	 * @param userId of Long type
	 * 
	 * @return List of type OrderViewDTO
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 */
	@Override
	public List<OrderViewDTO> getUserOrders(Long userId) {
		List<Order> oList = orderRepository.findOrderByUserId(userId);
		List<OrderViewDTO> ovList = new ArrayList<>();

		for (Order order : oList) {
			List<AddOn> addons = order.getAddOns();
			List<String> addonNames = new ArrayList<>();
			for (AddOn ao : addons) {
				addonNames.add(ao.getName());
			}

			ovList.add(new OrderViewDTO(userId, order.getId(), order.getMenu().getName(), addonNames,
					order.getTotalAmount(), order.getOrderDate(), order.getOrderTime()));

		}
		return ovList;

	}

	/*
	 * To update user from the system
	 * 
	 * @param userId of Long type and user of UserDTO2 type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id is null.
	 * 
	 * @throws ResourceNotFoundException - if id is invalid.
	 */
	@Override
	public User updateUserProfile(@Valid UserDTO2 user, Long userId) {
		User updatedUser = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User !!! Can not upadate details"));
		updatedUser.setFirstName(user.getFirstName());
		updatedUser.setLastName(user.getLastName());
		updatedUser.setPhone(user.getPhone());
		updatedUser.setAddress(user.getAddress());
		return updatedUser;
	}

	/*
	 * To get user data from the system
	 * 
	 * @param email of String type
	 * 
	 * @return SigninUserResp DTO
	 * 
	 * @throws ResourceNotFoundException - if email is invalid.
	 */

	@Override
	public SigninUserResp getUserData(String email) {
		List<User> uList = userRepository.findByEmail(email);

		User user = null;
		try {
			user = uList.get(0);
		} catch (Exception e) {
			throw new ResourceNotFoundException("Invalid Email_id !!");
		}

		SigninUserResp rsp = mapper.map(user, SigninUserResp.class);

		Balance b = balanceRepository.findById(user.getId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"));

		rsp.setBalance(b.getBalance());

		return rsp;
	}

}
