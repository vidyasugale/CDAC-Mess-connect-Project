package com.messconnect.dto;

import org.hibernate.validator.constraints.Length;

import com.messconnect.entities.Bread;
import com.messconnect.entities.Curry;
import com.messconnect.entities.MainCourse;
import com.messconnect.entities.Rice;
import com.messconnect.entities.Sweet;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuDTO {
	@NotBlank(message = "name can't be blank!!")
	@Length(min = 3, max = 30, message = "Invalid name!!")
	private String name;
	@NotNull
	private double price;
	@NotNull
	private Sweet sweet;
	@NotNull
	private Rice rice;
	@NotNull
	private Curry curry;
	@NotNull
	private Bread bread;
	@NotNull
	private MainCourse mainCourse;
}
