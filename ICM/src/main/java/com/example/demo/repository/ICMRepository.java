package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.lcm.ICM;


@Repository
public interface ICMRepository extends JpaRepository<ICM, Integer>{
	
	@Query("select i from ICM i where i.phno=?1")
	public List<ICM> findNameByPhNo(long phno);

}
