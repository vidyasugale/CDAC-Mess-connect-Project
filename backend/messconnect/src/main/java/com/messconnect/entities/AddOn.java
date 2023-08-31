package com.messconnect.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
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
@Table(name = "add_ons")
public class AddOn extends BaseEntity {

	@NotBlank(message = "Name can't be blank!!")
	@Column(length = 30)
	@NotNull
	private String name;

	@Column(nullable = false)
	@NotNull
	private double price;

	@Column(columnDefinition = "boolean default false")
	@NotNull
	private boolean active;
}
