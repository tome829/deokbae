package inox.deokbae.deokbae;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

import java.sql.Connection;
import java.sql.SQLException;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class postgresqlTest {

    @Autowired
    DataSource dataSource; //application properties에 등록된 데이터베이스 관련 정보들을 가져옴

    @Test
    void testDatabaseConnection() {
        assertThat(dataSource).isNotNull();
        try (Connection connection = dataSource.getConnection()) {
            assertThat(connection).isNotNull();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
