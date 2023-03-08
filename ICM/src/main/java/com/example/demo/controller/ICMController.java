package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.lcm.ICM;
import com.example.demo.repository.ICMRepository;
import com.example.demo.service.ICMService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class ICMController {
		
		@Autowired
		ICMRepository repo;
		@Autowired
		ICMService svc;
		
		
		@GetMapping("/inventory")
		List<ICM> tl(){
			return repo.findAll();
		}
		@PostMapping("/inventory")
		public ICM tl1(@RequestBody ICM i) {
			return repo.save(i);
		}
		@DeleteMapping("/inventory/{id}")
		public String dl(@PathVariable int id ) {
			return svc.delete(id);
		}
		@PutMapping("/inventory/{id}")
		public String updateEmployee(@PathVariable int id,@RequestBody ICM upd) {
			if(repo.existsById(id)) {
				ICM t=new ICM();
				t.setId(id);
				t.setCname(upd.getCname());
				t.setName(upd.getName());
				t.setPhno(upd.getPhno());
				t.setLocation(upd.getLocation());
				t.setQty(upd.getQty());
				t.setDatein(upd.getDatein());
				repo.save(t);
				return "Updated";
			}
			else
			 return "Id doesnt exist ";
		}
		@GetMapping("/inventory/{id}")
		public Optional<ICM> getId(@PathVariable int id){
			return svc.gi(id);
		}
		@GetMapping("{phno}")
		public List<ICM> getphNo(@PathVariable long phno) {
			return svc.gp(phno);
		}
		
		
	}


