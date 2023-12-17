package org.jsp.springboottest.dao;

import java.util.Optional;

import org.jsp.springboottest.dto.Merchant;
import org.jsp.springboottest.dto.ResponseStructure;
import org.jsp.springboottest.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

@Repository
public class MerchantDao {
	@Autowired
	private MerchantRepository repository;
	
	public Merchant saveMerchant(Merchant merchant) {
		return  repository.save(merchant);
	}
	public Merchant updateMerchant(Merchant merchant) {
		return repository.save(merchant);
	}
	public Optional<Merchant> findById(int id) {
		return repository.findById(id);
	}
	
	public  Merchant verifyMerchant(long phone,String password) {
		return repository.verifyMerchant(phone,password);
	}
	
	

}
