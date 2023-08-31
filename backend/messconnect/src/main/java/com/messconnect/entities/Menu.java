
package com.messconnect.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "menu")
public class Menu extends BaseEntity {

	@NotBlank(message = "Name can't be blank!!")
	@Column(length = 30)
	@NotNull
	private String name;

	@Column(columnDefinition = "double default 0", nullable = false)
	private double price;

	@ManyToOne
	@JoinColumn(name = "sweet_id")
	@NotNull
	private Sweet sweet;

	@ManyToOne
	@JoinColumn(name = "rice_id")
	@NotNull
	private Rice rice;

	@ManyToOne
	@JoinColumn(name = "curry_id")
	@NotNull
	private Curry curry;

	@ManyToOne
	@JoinColumn(name = "bread_id")
	@NotNull
	private Bread bread;

	@ManyToOne
	@JoinColumn(name = "main_course_id")
	@NotNull
	private MainCourse mainCourse;

	@Column(columnDefinition = "boolean default false")
	@NotNull
	private boolean active;

}