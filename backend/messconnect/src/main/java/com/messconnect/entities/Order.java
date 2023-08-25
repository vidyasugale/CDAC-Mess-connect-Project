package com.messconnect.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order extends BaseEntity{
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false) 
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "menu_id", nullable = false)
	private Menu menu;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "add_on_id", nullable = false)
	private AddOn addOn;

	@Column(nullable = false,columnDefinition = "double default 0",name = "total_amount")
	private double totalAmount;

	@Column(nullable = false,name = "order_date")
	@CreationTimestamp
	private LocalDate orderDate;
	
	@Column(nullable = false,name = "order_time")
	@CreationTimestamp
	private LocalTime orderTime;
	

}