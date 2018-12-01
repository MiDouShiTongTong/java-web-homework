package com.yyc.book.controller;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.yyc.book.domain.Person;
import com.yyc.book.service.IPersonService;
import com.yyc.book.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
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
@RequestMapping("/person")
public class PersonController {
    @Autowired
    IPersonService iPersonService;

    @GetMapping("")
    public Map selectPersonList(
        Person person,
        @RequestParam(value = "current", defaultValue = "1") int current,
        @RequestParam(value = "size", defaultValue = "2000") int size
    ) {
        // 构建响应数据
        return new Response("0", null, iPersonService.selectPersonList(person, current, size)).getMap();
    }

    @GetMapping("/{id}")
    public Map selectPersonById(@PathVariable("id") Long id) {
        // 获取数据
        Person person = iPersonService.selectPersonById(id);

        // 构建响应数据
        return new Response("0", null, person).getMap();
    }

    @PostMapping("")
    public Map insertPerson(@RequestBody Person person) {
        // 完善数据
        person.setCreatedAt(LocalDateTime.now());
        person.setUpdatedAt(LocalDateTime.now());

        // 添加数据
        iPersonService.insertPerson(person);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @PutMapping("/{id}")
    public Map updatePerson(@RequestBody Person person, @PathVariable("id") Long id) {
        // 完善数据
        person.setId(id);
        person.setUpdatedAt(LocalDateTime.now());

        // 修改数据
        iPersonService.updatePerson(person);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @DeleteMapping("/{id}")
    public Map deletePerson(Person person, @PathVariable("id") Long id) {
        // 完善数据
        person.setId(id);

        // 删除数据
        iPersonService.deletePerson(person);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }
}
