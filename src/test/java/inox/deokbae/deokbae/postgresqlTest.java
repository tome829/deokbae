package inox.deokbae.deokbae;

import inox.deokbae.deokbae.Entity.Product;
import inox.deokbae.deokbae.Repository.ProductRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class postgresqlTest {


    @Autowired
    private ProductRepository productRepository;

    @Test
    public void insertTest() {
        long num = 1000;
        for(int i=0; i<5; i++) {
            Product product = Product.builder()
                    .cate_code(num)
                    .contents("test")
                    .title("test_title")
                    .del_yn("N")
                    .build();
            System.out.println("test성공 : " + product.toString());
        }
    }

    @Test
    public void test() {
        long num = 1;
        productRepository.getAllById(num);
    }

}