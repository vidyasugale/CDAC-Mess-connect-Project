package com.messconnect.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.customException.ResourceNotFoundException;
import com.messconnect.dto.SigninUser;
import com.messconnect.dto.SigninUserResp;
import com.messconnect.entities.Balance;
import com.messconnect.entities.Menu;
import com.messconnect.entities.Order;
import com.messconnect.entities.Role;
import com.messconnect.entities.User;
import com.messconnect.repositories.BalanceRepository;
import com.messconnect.repositories.MenuRepository;
import com.messconnect.repositories.OrderRepository;
import com.messconnect.repositories.UserRepository;

@Service
@Transactional
public class HomeServiceImpl implements HomeService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BalanceRepository balanceRepository;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private MenuRepository menuRepository;

	@Override
	public Object authenticate(SigninUser request) {
		User user = userRepository.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Bad Credentials , Invalid Login!!!!!!!!!!!!!"));
	
		
	 	Balance b=balanceRepository.findById(user.getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"));
		
		List<Order> orders=orderRepository.findByOrderDateAndUser(LocalDate.now(),user);
		if(user.getRole()==Role.valueOf("ROLE_CUSTOMER")){
		return new SigninUserResp(user.getId(),user.getFirstName(),user.getLastName(),b.getBalance(),orders,user.getRole());
	}
		return null;
	}

	@Override
	public List<Menu> getHomeData() {
		List<Menu> activeMenu=menuRepository.findByActive(true);
		return activeMenu;
	}
	
	

}
