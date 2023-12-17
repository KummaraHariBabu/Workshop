package org.jsp.springboottest.service;

import java.util.Optional;

import org.jsp.springboottest.dao.MerchantDao;
import org.jsp.springboottest.dao.ProductDao;
import org.jsp.springboottest.dto.Merchant;
import org.jsp.springboottest.dto.Product;
import org.jsp.springboottest.dto.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class ProductService {
	@Autowired
	private ProductDao dao;
	
	@Autowired
	private MerchantDao mdao;
	
	
		public ResponseEntity<ResponseStructure<Product>> saveProduct(Product product,int user_id) {
			Optional<Merchant> recUser = mdao.findById(user_id);
			ResponseStructure<Product> structure = new ResponseStructure<>();
			if(recUser.isPresent()) {			
				Merchant u = recUser.get();
				u.getProducts().add(product);
				product.setMerchant(recUser.get());;
				mdao.updateMerchant(recUser.get());
				dao.saveProduct(product);
				structure.setData(product);
				structure.setMessage("product added successfully");
				structure.setStatusCode(HttpStatus.CREATED.value());
				return new ResponseEntity<ResponseStructure<Product>>(structure,HttpStatus.CREATED);
			}
		else {
			structure.setData(null);
			structure.setMessage("merchant not found");
			structure.setStatusCode(HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<ResponseStructure<Product>>(structure,HttpStatus.NOT_FOUND);
		}
		
		
	}

}
