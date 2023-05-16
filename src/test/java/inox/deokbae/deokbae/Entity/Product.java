package inox.deokbae.deokbae.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor //파라미터가 없는 기본 생성자를 생성
@AllArgsConstructor //전체 변수에 대한 생성자를 생성
//@RequiredArgsConstructor //final이나, @NotNull에 대한 변수의 생성자를 생성
@Table(name = "product", schema = "tospace")
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_id")
    private Long id;

    private Long cate_code;

    private String title;

    private String contents;

    @Column(name = "reg_dt")
    private Date date;

    private String del_yn;

}
