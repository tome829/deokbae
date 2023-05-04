package inox.deokbae.deokbae.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginValidator {
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
/*
    @Autowired
    private UserMapper mapper;

    @Override
    public UserDetails loadUserDetails(String insertId) throws UsernameNotFoundException{
        UserInfo userInfo = mapper.getUserInfo(insertId);

        return User.builder()
                .username(insertId)
                .password(pw)
                .roles(roles)
                .build();
    }*/
}
