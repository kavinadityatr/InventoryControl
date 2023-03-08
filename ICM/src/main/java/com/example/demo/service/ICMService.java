package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.lcm.ICM;
import com.example.demo.repository.ICMRepository;

@Service
public class ICMService {
		@Autowired
		ICMRepository repo;
		public String delete(int id) {
			if(repo.existsById(id)) {
				  repo.deleteById(id);
				  return "Deleted";}
				  else return "Id "+id+" doesn't exist";
		}
		
		
		public Optional<ICM> gi(int id) {
			return repo.findById(id);
			}
		public List<ICM> gp (long PhNo){
			return repo.findNameByPhNo(PhNo);
			
		}

	}
	
	

