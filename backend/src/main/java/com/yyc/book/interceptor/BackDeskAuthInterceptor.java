package com.yyc.book.interceptor;

import com.yyc.book.exception.CommonException;
import com.yyc.book.util.Response;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BackDeskAuthInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws CommonException {
        if (httpServletRequest.getSession().getAttribute("manager") == null) {
            throw new CommonException(new Response("2", "用户未登录", null).getMap());
        } return true;
    }
}
