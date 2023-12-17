package org.jsp.springboottest.service;

import java.util.Optional;

import org.jsp.springboottest.dao.MerchantDao;
import org.jsp.springboottest.dto.Merchant;
import org.jsp.springboottest.dto.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MerchantService {
	@Autowired
	private MerchantDao dao;
	
	public ResponseEntity<ResponseStructure<Merchant>> saveMerchant(Merchant merchant) {
		ResponseStructure<Merchant> structure = new ResponseStructure<>();
		structure.setData(dao.saveMerchant(merchant));
		structure.setMessage("merchant is saved successfully");
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Merchant>>(structure,HttpStatus.CREATED);
	}
	public ResponseEntity<ResponseStructure<Merchant>> updateMerchant(Merchant merchant) {
		ResponseStructure<Merchant> structure = new ResponseStructure<>();
		structure.setData(dao.updateMerchant(merchant));
		structure.setMessage("merchant is updated successfully");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<Merchant>>(structure,HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> verifyMerchant(long phone,String password) {
		ResponseStructure<Merchant> structure = new ResponseStructure<>();
		Optional<Merchant> recM = dao.findById(0);
 		structure.setData(dao.verifyMerchant(phone, password));
		structure.setMessage("merchant verified successfully");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Merchant>>(structure,HttpStatus.OK);
	}	

}