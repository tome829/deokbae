package inox.deokbae.deokbae.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception{
        httpSecurity
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(PERMIT_URL).permitAll()
                .antMatchers("/product/**").permitAll()
                .anyRequest().authenticated();


                /*
                .authorizeRequests()
                    .antMatchers("/index").permitAll() // loadBalancer chk, /chk 는 인증안함
                    .antMatchers("/manager").hasAuthority("ROLE_ADMIN") // 유저 ROLE에 따른 접근제어 ROLE_ADMIN을 가지고 있어야지 /manager 이하의 uri 에 접근가능
                    .anyRequest().authenticated() // 어떤 url로 접근하든 인증 필요
                .and()
                    .formLogin() // form방식 로그인
                    .loginPage("/index")// 로그인 페이지
                    .loginProcessingUrl("/loginProc")   /// 로그인 페이지에서 넘어갈 로그인 프로세스
                    .usernameParameter("id")// form name 변경 <input type="text" name="id">
                    .passwordParameter("pwd")// form name 변경 <input type="password" name="pwd">
                    .defaultSuccessUrl("/webapp/index", true)// 로그인 성공시 이동할 url
                    .permitAll()
                .and()
                    .logout()
                    .logoutRequestMatcher(new AntPathRequestMatcher("/logoutProc"));// 로그아웃 되고 인증된게 사라지니 다시 로그인 페이지로 자동 이동함 / 생략 시 default로 'logout' 호출 시 로그아웃 가능

                 */
    }

    @Override
    public void configure(WebSecurity webSecurity) throws Exception{
        webSecurity.ignoring().antMatchers("/static/js/**","/static/css/**","/static/img/**");
    }



    private static final String[] PERMIT_URL = {
            "/index",
            "/product/**",
            "/swagger-ui.html",
            "/swagger-ui/index.html",
            "/swagger-ui/**",
            "/swagger-resources",
            "/swagger-resources/**",
            "/v2/api-docs",
            "/v3/api-docs/**",
            "/api/auth/**"
    };
}
