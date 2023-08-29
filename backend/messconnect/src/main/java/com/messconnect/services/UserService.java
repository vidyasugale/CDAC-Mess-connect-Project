package com.messconnect.services;

import java.util.List;

import com.messconnect.dto.OrderViewDTO;
import com.messconnect.dto.SigninUserResp;
import com.messconnect.dto.UserDTO2;
import com.messconnect.entities.User;

import jakarta.validation.Valid;

public interface UserService {

	String addUser(User newUser);

	User getUser(Long userId);

	List<User> getAllUsers();

	String deleteUser(Long id);

	double getUserBalance(Long userId);

	List<OrderViewDTO> getUserOrders(Long userId);

	User updateUserProfile(@Valid UserDTO2 user, Long userId);

	SigninUserResp getUserData(String email);

}
