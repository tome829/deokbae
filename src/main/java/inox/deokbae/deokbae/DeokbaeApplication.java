package inox.deokbae.deokbae;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(scanBasePackages = "inox.deokbae.deokbae.*", exclude = DataSourceAutoConfiguration.class)
public class DeokbaeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeokbaeApplication.class, args);
	}

}
