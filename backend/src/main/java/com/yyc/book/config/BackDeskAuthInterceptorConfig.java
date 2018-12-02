package com.yyc.book.config;


import com.yyc.book.interceptor.BackDeskAuthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class BackDeskAuthInterceptorConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new BackDeskAuthInterceptor()).addPathPatterns("/**").excludePathPatterns("/manager/**");
    }
}
