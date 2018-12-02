package com.yyc.book.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yyc.book.domain.Manager;
import com.yyc.book.exception.CommonException;
import com.yyc.book.util.Response;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
@RestController
@RequestMapping("/manager")
public class ManagerController {
    @PostMapping("/signIn")
    public Map signIn(@RequestBody Manager manager, HttpServletRequest httpServletRequest) {
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

    @GetMapping("/userInfo")
    public Map selectUserInfo(HttpServletRequest httpServletRequest) {
        // 获取登陆用户的信息
        Manager manager = (Manager) httpServletRequest.getSession().getAttribute("manager");
        if (manager == null) {
            return new Response("2", "用户未登录", null).getMap();
        } else {
            return new Response("0", null,  manager).getMap();
        }
    }

    @GetMapping("/signOut")
    public Map signOut(HttpServletRequest httpServletRequest) {
        // 清空 session
        httpServletRequest.getSession().setAttribute("manager", null);
        return new Response("0", null, null).getMap();
    }
}
