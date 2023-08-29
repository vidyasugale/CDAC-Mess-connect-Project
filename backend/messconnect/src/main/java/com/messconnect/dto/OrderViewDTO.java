package com.messconnect.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderViewDTO {
	private Long userId;
	private Long orderId;
	private String menuName;
	private List<String> addonsNames;
	private double totalAmount;

}
