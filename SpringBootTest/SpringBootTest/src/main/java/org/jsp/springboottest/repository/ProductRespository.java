package org.jsp.springboottest.repository;

import org.jsp.springboottest.dto.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRespository extends JpaRepository<Product, Integer> {
	
 
}