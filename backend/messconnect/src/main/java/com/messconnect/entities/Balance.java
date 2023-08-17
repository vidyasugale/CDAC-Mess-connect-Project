
package com.messconnect.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "balances")
public class Balance extends BaseEntity{
	@OneToOne
	@MapsId
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(columnDefinition = "double default 0",nullable = false)
	private double balance;
	
	

}