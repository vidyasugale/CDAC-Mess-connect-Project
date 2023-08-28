package com.messconnect.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.messconnect.customException.ResourceNotFoundException;
import com.messconnect.entities.Balance;
import com.messconnect.repositories.BalanceRepository;

@Service
@Transactional
public class BalanceServiceImpl implements BalanceService {

	@Autowired
	private BalanceRepository balanceRepository;

	@Override
	public String updateUserBalance(Long userId, double updatedBal) {
		Balance updatedB = balanceRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User !!! Can not upadate details"));
		updatedB.setBalance(updatedBal);
		return updatedB.getUser().getFirstName() + " balance updated with " + updatedB.getBalance();
	}

}
