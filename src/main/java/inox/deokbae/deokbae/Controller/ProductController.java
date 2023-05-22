package inox.deokbae.deokbae.Controller;

import inox.deokbae.deokbae.Entity.Product;
import inox.deokbae.deokbae.Service.ProductService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
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
    public Page<?> getListProduct(int pageNum, int pageSize, String sortType, String srchKwd){
        
        return productService.getListProduct(pageNum, pageSize, sortType, srchKwd);
    }

    @GetMapping("/test")
    public void getText(){
        System.out.println("쉐리마");
        Optional<Product> product = productService.test();
        System.out.println(product);
    }

    @ApiOperation(value = "테스트",notes = "테스트입니다.")
    @GetMapping("/textSample")
    public void getTest(){
        System.out.println("테스트 입니다.");
    }
}
