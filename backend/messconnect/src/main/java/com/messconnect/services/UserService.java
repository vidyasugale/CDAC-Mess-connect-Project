package com.messconnect.services;

import java.util.List;

import com.messconnect.entities.User;

public interface UserService {

   String addUser(User newUser);

    User getUser(Long userId);

	List<User> getAllUsers();

}
