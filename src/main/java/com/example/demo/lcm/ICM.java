package com.example.demo.lcm;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ICM {
        @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
        private String cname ;
		private String name;
		private long phno ;
		private String location;
		private double qty ;
		private String datein;
		public ICM() {
			super();
			// TODO Auto-generated constructor stub
		}
		public ICM( String cname, String name, long phno, String location, double qty, String datein) {
			super();
			this.cname = cname;
			this.name = name;
			this.phno = phno;
			this.location = location;
			this.qty = qty;
			this.datein = datein;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getCname() {
			return cname;
		}
		public void setCname(String cname) {
			this.cname = cname;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public long getPhno() {
			return phno;
		}
		public void setPhno(long phno) {
			this.phno = phno;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public double getQty() {
			return qty;
		}
		public void setQty(double qty) {
			this.qty = qty;
		}
		public String getDatein() {
			return datein;
		}
		public void setDatein(String datein) {
			this.datein = datein;
		}
		
		
}