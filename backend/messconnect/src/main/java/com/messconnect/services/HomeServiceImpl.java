package com.messconnect.services;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.customException.ResourceNotFoundException;
import com.messconnect.dto.SigninAdminResp;
import com.messconnect.dto.SigninUser;
import com.messconnect.dto.SigninUserResp;
import com.messconnect.dto.TodayMenuDTO;
import com.messconnect.entities.AddOn;
import com.messconnect.entities.Balance;
import com.messconnect.entities.Menu;
import com.messconnect.entities.Order;
import com.messconnect.entities.Role;
import com.messconnect.entities.User;
import com.messconnect.repositories.AddonRepository;
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

	@Autowired
	private AddonRepository addonRepository;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Object authenticate(SigninUser request) {

//		User user = userRepository.findByEmailAndPassword(request.getEmail(), request.getPassword())
//				.orElseThrow(() -> new ResourceNotFoundException("Bad Credentials , Invalid Login!!!!!!!!!!!!!"));
		List<User> uList = userRepository.findByEmail(request.getEmail());
		User user = null;
		try {
			user = uList.get(0);
		} catch (Exception e) {
			throw new ResourceNotFoundException("Invalid Email_id !!");
		}

		if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			throw new ResourceNotFoundException("Invalid Password!!");
		}

		if (user.getRole() == Role.valueOf("ROLE_CUSTOMER")) {

			Balance b = balanceRepository.findById(user.getId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"));

			List<Order> orders = orderRepository.findByOrderDateAndUser(LocalDate.now(), user);
			return new SigninUserResp(user.getId(), user.getFirstName(), user.getLastName(), b.getBalance(), orders,
					user.getRole());
		}
		return new SigninAdminResp(user.getId(), user.getFirstName(), user.getLastName(), user.getRole());
	}

	@Override
	public List<Menu> getHomeData() {
		List<Menu> activeMenu = menuRepository.findByActive(true);
		return activeMenu;
	}

	@Override
	public TodayMenuDTO getTodayMenuData() {
		List<Menu> mList = menuRepository.findByActive(true);
		List<AddOn> aList = addonRepository.findByActive(true);
		TodayMenuDTO tmDTO = new TodayMenuDTO(mList, aList);
		return tmDTO;
	}

}
