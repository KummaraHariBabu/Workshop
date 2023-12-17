package org.jsp.springboottest.repository;

import java.util.Optional;

import org.jsp.springboottest.dto.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MerchantRepository extends JpaRepository<Merchant, Integer>{
	@Query("select m from Merchant m where m.phone=?1 and m.password=?2")

	public Merchant verifyMerchant(long phone, String password);

}
