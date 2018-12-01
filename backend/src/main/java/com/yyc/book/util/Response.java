package com.yyc.book.util;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Data
public class Response {
    private String code = null;
    private String message = null;
    private Object data = null;

    public Response(String code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public Map<String, Object> getMap() {
        Map<String, Object> map = new HashMap<>();
        if (code != null) {
            map.put("code", code);
        }
        if (message != null) {
            map.put("message", message);
        }
        if (data != null) {
            map.put("data", data);
        }
        return map;
    }
}
