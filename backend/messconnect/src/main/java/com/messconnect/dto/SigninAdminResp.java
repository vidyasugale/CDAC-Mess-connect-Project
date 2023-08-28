package com.messconnect.dto;

import com.messconnect.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SigninAdminResp {

	private Long id;
	private String firstName;
	private String lastName;
	private Role role;

}
