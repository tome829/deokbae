package inox.deokbae.deokbae.Service;

import inox.deokbae.deokbae.Entity.Product;
import inox.deokbae.deokbae.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Page<Product> getListProduct(int pageNum, int pageSize, String sortType, String srchKwd){
        if(StringUtils.hasText(sortType)){
            Sort sort = Sort.by(sortType).descending();
            Pageable pageable = PageRequest.of(pageNum, pageSize, sort);
            return productRepository.findProducts(pageable);
        }else{
            Sort sort = Sort.by("like_count").descending();
            Pageable pageable = PageRequest.of(pageNum, pageSize, sort);
            return productRepository.findProducts(pageable);
        }
    }
    public Optional<Product> test(){
        long id = 1;
        Optional<Product> product= productRepository.findById(id);
        return product;
    }
}
