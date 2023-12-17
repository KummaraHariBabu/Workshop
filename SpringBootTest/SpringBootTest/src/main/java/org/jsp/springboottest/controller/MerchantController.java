package org.jsp.springboottest.controller;

import org.jsp.springboottest.dto.Merchant;
import org.jsp.springboottest.dto.ResponseStructure;
import org.jsp.springboottest.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MerchantController {
	@Autowired
	private MerchantService service;
	
	@PostMapping("/merchant")
	public ResponseEntity<ResponseStructure<Merchant>> saveMerchant(@RequestBody Merchant m) {
		return service.saveMerchant(m);
	}
	@PutMapping("/merchant")
	public ResponseEntity<ResponseStructure<Merchant>> updateMerchant(@RequestBody Merchant m) {
		return service.updateMerchant(m);
	}
	@GetMapping("/merchant/verifymerchant")
	public ResponseEntity<ResponseStructure<Merchant>> verifyMerchant(@RequestParam long phone,@RequestParam String password) {
		return service.verifyMerchant(phone, password);
	}
	
}
