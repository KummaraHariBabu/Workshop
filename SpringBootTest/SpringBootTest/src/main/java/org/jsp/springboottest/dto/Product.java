package org.jsp.springboottest.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name,brand,description;
	private double cost;
	private String imageurl;
	
	@ManyToOne
	@JoinColumn(name="merchant_id")
	private Merchant merchant;

}
