package org.jsp.springboottest.dao;

import java.util.Optional;

import org.jsp.springboottest.dto.Product;
import org.jsp.springboottest.repository.ProductRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDao {
	@Autowired
	private ProductRespository repository;
	
	public Product saveProduct(Product p) {
		return repository.save(p);
	}
//	public boolean deleteProduct(int id) {
//		return repository.deleteById(id);
//  	}

	public Optional<Product> findById(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}
	

}