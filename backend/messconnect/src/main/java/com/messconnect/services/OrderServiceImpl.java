package com.messconnect.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.customException.ResourceNotFoundException;
import com.messconnect.dto.OrderDTO;
import com.messconnect.entities.AddOn;
import com.messconnect.entities.Balance;
import com.messconnect.entities.Menu;
import com.messconnect.entities.Order;
import com.messconnect.entities.User;
import com.messconnect.repositories.AddonRepository;
import com.messconnect.repositories.BalanceRepository;
import com.messconnect.repositories.MenuRepository;
import com.messconnect.repositories.OrderRepository;
import com.messconnect.repositories.UserRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orederRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BalanceRepository balanceRepository;

	@Autowired
	private MenuRepository menuRepository;

	@Autowired
	private AddonRepository addonRepository;

	/*
	 * To add new Order in the system
	 * 
	 * @param newOrderDTO of OrderDTO type
	 * 
	 * @return String massage
	 * 
	 * @throws IllegalArgumentException - in case the given id are null.
	 * 
	 * @throws ResourceNotFoundException- in case not enough balance.
	 */
	@Override
	public String placeNewOrder(OrderDTO newOrderDTO) {
		User user = userRepository.getReferenceById(newOrderDTO.getUserId());
		Menu menu = menuRepository.getReferenceById(newOrderDTO.getMenuId());
		List<AddOn> addons = addonRepository.findAllById(newOrderDTO.getAddOnsIds());

		Order order = new Order();
		order.setUser(user);
		order.setMenu(menu);
		order.setTotalAmount(newOrderDTO.getTotalAmount());
		order.setAddOns(addons);

		Balance b = balanceRepository.findById(newOrderDTO.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user id !!!!!"));
		if (b.getBalance() < order.getTotalAmount()) {
			throw new ResourceNotFoundException("Not Enough balance!!!!");
		}
		b.setBalance(b.getBalance() - newOrderDTO.getTotalAmount());

		Order persistentOrder = orederRepository.save(order);
		return "Order Number :: " + persistentOrder.getId() + " placed!!";
	}

}
