package com.yyc.book.exception;

import lombok.Getter;

import java.util.Map;

@Getter
public class CommonException extends Exception {
    private Map<String, Object> map;

    public CommonException(Map<String, Object> map) {
        this.map = map;
    }
}
