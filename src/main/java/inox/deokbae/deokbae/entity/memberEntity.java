package inox.deokbae.deokbae.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class memberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String m_uuid;

    private String id;

    private String pw;

    private String username;

    private String email;

    private Date create_dt;

    private String use_yn;



}
