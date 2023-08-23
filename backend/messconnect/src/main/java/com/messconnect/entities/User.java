
package com.messconnect.entities;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
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
	
	@NotBlank(message = "First name can't be blank!!")
	@Column(name="first_name")
	@Length(min = 3, max = 30, message = "Invalid first name!!")
	@Pattern(regexp = "^[a-z,A-Z]{3,30}$")
	private String firstName;
	
	@NotBlank(message = "Last name can't be blank!!")
	@Column(name = "last_name")
	@Length(min = 3, max = 30, message = "Invalid first name!!")
	@Pattern(regexp = "^[a-z,A-Z]{3,30}$")
	private String lastName;
	
	@Column(length = 30, unique = true)
	@Email(message = "Invalid email format!!")
	private String email;	

	@NotBlank(message = "Phone can't be blank!!")
	@Length(min = 10, max = 10, message = "Invalid phone number!!")
	@Pattern(regexp = "^[0-9]{10}$")
	private String phone;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	@NotNull(message = "Role must be supplied!!")
	private Role role;
	
	@NotBlank(message = "Password can't be blank!!")
	@Column(length = 300)
	private String password;
	
	@NotBlank(message = "Address can't be blank!!")
	@Column(length = 300)
	private String address;

}