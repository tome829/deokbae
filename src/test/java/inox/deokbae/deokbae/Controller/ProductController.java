package inox.deokbae.deokbae.Controller;

import inox.deokbae.deokbae.Entity.Product;
import inox.deokbae.deokbae.Service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    /** TODO 검색/덕,춘,봉 카테고리/최신순, 인기순, 좋아요 순
     *
     * @return product 상품 리스트
     */
    @GetMapping("/getall")
    public Page<?> getListProduct(@RequestParam(defaultValue = "0") int pageNum,@RequestParam(defaultValue = "10") int pageSize,@RequestParam(required = false) String sortType,@RequestParam(required = false) String srchKwd){

        return productService.getListProduct(pageNum, pageSize, sortType, srchKwd);

    }

    @GetMapping("/test1")
    public void getText(){
        System.out.println("테스트1테스트");
        Optional<Product> product = productService.test();
        System.out.println(product);
    }
}
