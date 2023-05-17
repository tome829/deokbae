package inox.deokbae.deokbae.Repository;

import inox.deokbae.deokbae.Entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.Id;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select p.like " +
            "from Product p " +
            "where p.del_yn='N' ")
    Page<Product> findProducts(Pageable pageable);

 /*   Product findAllById(long id);*/
}
