package com.messconnect.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
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
public class Order extends BaseEntity {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	@NotNull
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "menu_id", nullable = false)
	@NotNull
	private Menu menu;

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name = "order_addons", joinColumns = @JoinColumn(name = "order_id"), inverseJoinColumns = @JoinColumn(name = "addon_id"))
	@NotNull
	private List<AddOn> addOns = new ArrayList<>();

	@Column(nullable = false, columnDefinition = "double default 0", name = "total_amount")
	@NotNull
	private double totalAmount;

	@Column(nullable = false, name = "order_date")
	@CreationTimestamp
	private LocalDate orderDate;

	@Column(nullable = false, name = "order_time")
	@CreationTimestamp
	private LocalTime orderTime;

}