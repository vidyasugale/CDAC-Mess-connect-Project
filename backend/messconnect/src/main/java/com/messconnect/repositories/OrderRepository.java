package com.messconnect.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.messconnect.entities.Order;
import com.messconnect.entities.User;

public interface OrderRepository extends JpaRepository<Order, Long>  {
	List<Order> findByOrderDateAndUser(LocalDate orderDate, User user);

}
