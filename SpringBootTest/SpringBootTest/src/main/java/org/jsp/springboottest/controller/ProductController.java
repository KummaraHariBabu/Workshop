package org.jsp.springboottest.controller;

import org.jsp.springboottest.dto.Merchant;
import org.jsp.springboottest.dto.Product;
import org.jsp.springboottest.dto.ResponseStructure;
import org.jsp.springboottest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	@Autowired
	private ProductService service;
	
	@PostMapping("/product/{m_id}")
	public ResponseEntity<ResponseStructure<Product>> saveMerchant(@RequestBody Product p , @PathVariable int m_id ) {
		return service.saveProduct(p, m_id);
	}

}