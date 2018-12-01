package com.yyc.book.config;

import com.yyc.book.exception.CommonException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandlerConfig {

    @ExceptionHandler(CommonException.class)
    @ResponseBody
    public Map<String, Object> handlerException(CommonException e) {
        // 当未知异常发生时，将信息弹出堆栈
        e.printStackTrace();
        return e.getMap();
    }
}
