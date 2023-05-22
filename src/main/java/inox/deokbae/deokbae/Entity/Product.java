package inox.deokbae.deokbae.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Entity
@Builder
@Table(name = "product", schema = "tospace")
@NoArgsConstructor //파라미터가 없는 기본 생성자를 생성
@AllArgsConstructor //전체 변수에 대한 생성자를 생성
//@RequiredArgsConstructor //final이나, @NotNull에 대한 변수의 생성자를 생성
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

    @Column(name = "like_count")
    private int like;

    private int price;

}
