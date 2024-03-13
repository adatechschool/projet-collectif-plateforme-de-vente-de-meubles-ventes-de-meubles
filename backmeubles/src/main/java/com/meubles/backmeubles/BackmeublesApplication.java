package com.meubles.backmeubles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.meubles.backmeubles")
public class BackmeublesApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackmeublesApplication.class, args);
	}
}
