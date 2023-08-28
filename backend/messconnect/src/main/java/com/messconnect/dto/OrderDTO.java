package com.messconnect.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

	private Long userId;
	private Long menuId;
	private List<Long> addOnsIds = new ArrayList<>();
	private double totalAmount;

}
