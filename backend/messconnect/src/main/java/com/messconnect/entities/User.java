
package com.messconnect.entities;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
@ToString(exclude = "password")
public class User extends BaseEntity{
	
	
	@Column(name="first_name")
	@Length(min = 3, max = 30, message = "Invalid first name!!")
	private String firstName;
	

	@Column(name = "last_name")
	@Length(min = 3, max = 30, message = "Invalid first name!!")
	private String lastName;
	
	@Column(length = 30, unique = true)
	private String email;	


	@Length(min = 10, max = 10, message = "Invalid phone number!!")
	private String phone;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	

	@Column(length = 300)
	private String password;
	

	@Column(length = 300)
	private String address;

}