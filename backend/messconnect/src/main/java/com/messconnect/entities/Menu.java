
package com.messconnect.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
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
public class Menu extends BaseEntity{
	
	@NotBlank(message = "Name can't be blank!!")
	@Column(length = 30)
	private String name;
	
	@Column(columnDefinition = "double default 0",nullable = false)
	private double price;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sweet_id")
	private Sweet sweet;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rice_id")
	private Rice rice;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "curry_id")
	private Curry curry;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "bread_id")
	private Bread bread;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "main_course_id")
	private MainCourse mainCourse;
	

}