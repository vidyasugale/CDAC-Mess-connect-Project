package com.messconnect.services;

import com.messconnect.dto.OrderDTO;

public interface OrderService {

	String placeNewOrder(OrderDTO newOrderDTO);

}
