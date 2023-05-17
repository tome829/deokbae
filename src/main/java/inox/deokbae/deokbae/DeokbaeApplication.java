package inox.deokbae.deokbae;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "inox.deokbae.deokbae.*")
public class DeokbaeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeokbaeApplication.class, args);
	}

}
