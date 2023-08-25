package com.messconnect.dto;

import org.hibernate.validator.constraints.Length;

import com.messconnect.entities.Role;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
public class UserDTO {

	@NotBlank(message = "First name can't be blank!!")
	@Length(min = 3, max = 30, message = "Invalid first name!!")
	@Pattern(regexp = "^[a-z,A-Z]{3,30}$")
	private String firstName;
	
	@NotBlank(message = "Last name can't be blank!!")
	@Length(min = 3, max = 30, message = "Invalid first name!!")
	@Pattern(regexp = "^[a-z,A-Z]{3,30}$")
	private String lastName;
	

	@NotBlank(message = "Email can't be blank!!")
	@Email(message = "Invalid email format!!")
	private String email;	

	@NotBlank(message = "Phone can't be blank!!")
	@Length(min = 10, max = 10, message = "Invalid phone number!!")
	@Pattern(regexp = "^[0-9]{10}$")
	private String phone;
	
	
	@NotNull(message = "Role must be supplied!!")
	private Role role;
	
	@NotBlank(message = "Password can't be blank!!")
	private String password;
	
	@NotBlank(message = "Address can't be blank!!")
	private String address;
}
