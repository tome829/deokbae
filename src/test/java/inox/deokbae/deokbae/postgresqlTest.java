package inox.deokbae.deokbae;


import inox.deokbae.deokbae.Entity.Product;
import inox.deokbae.deokbae.Repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import javax.persistence.Column;
import javax.sql.DataSource;
import javax.transaction.Transactional;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class postgresqlTest {

    @Autowired
    private ProductRepository productRepository;

    @Test
    void insertTest() {
        long num = 1000;
        for(int i=0; i<5; i++) {
            Product product = Product.builder()
                    .cate_code(num)
                    .contents("test")
                    .title("test_title")
                    .del_yn("N")
                                        .build();
        }
    }

}