package com.messconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.messconnect.entities.Balance;

public interface BalanceRepository extends JpaRepository<Balance, Long> {

}
