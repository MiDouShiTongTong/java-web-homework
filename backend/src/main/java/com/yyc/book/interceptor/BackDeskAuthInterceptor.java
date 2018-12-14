package com.yyc.book.interceptor;

import com.yyc.book.exception.CommonException;
import com.yyc.book.util.Response;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BackDeskAuthInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws CommonException {
        // 如果不是映射到方法直接通过
        if (!(o instanceof HandlerMethod)) {
            return true;
        }
        if (httpServletRequest.getSession().getAttribute("manager") == null) {
            System.out.println(123456);
            throw new CommonException(new Response("2", "用户未登录", null).getMap());
        }
        return true;
    }
}
