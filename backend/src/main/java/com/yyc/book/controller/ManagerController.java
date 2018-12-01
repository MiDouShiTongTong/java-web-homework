package com.yyc.book.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yyc.book.domain.Manager;
import com.yyc.book.util.Response;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
@RestController
@RequestMapping("/manager")
public class ManagerController {
    @PostMapping("/signIn")
    public Map signIn(Manager manager, HttpServletRequest httpServletRequest) {
        QueryWrapper<Manager> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", manager.getUsername());
        queryWrapper.eq("password", manager.getPassword());

        manager = new Manager().selectOne(queryWrapper);

        if (manager != null) {
            // 设置 session
            httpServletRequest.getSession().setAttribute("manager", manager);
            return new Response("0", null, manager).getMap();
        } else {
            return new Response("1", "用户名或密码不正确！", manager).getMap();
        }
    }

    @GetMapping("/signOut")
    public Map signOut(HttpServletRequest httpServletRequest) {
        // 清空 session
        httpServletRequest.getSession().setAttribute("manager", null);
        return new Response("0", null, null).getMap();
    }
}
