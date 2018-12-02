package com.yyc.book.controller;


import com.yyc.book.domain.BookBorrow;
import com.yyc.book.domain.BookBorrowVo;
import com.yyc.book.service.IBookBorrowService;
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
@RequestMapping("/bookBorrow")
public class BookBorrowController {
    @Autowired
    IBookBorrowService iBookBorrowService;

    @GetMapping("")
    public Map selectBookBorrowList(
        BookBorrowVo bookBorrowVo,
        @RequestParam(value = "current", defaultValue = "1") int current,
        @RequestParam(value = "size", defaultValue = "2000") int size
    ) {
        // 构建响应数据
        return new Response("0", null, iBookBorrowService.selectBookBorrowList(bookBorrowVo, current, size)).getMap();
    }

    @GetMapping("/{id}")
    public Map selectBookBorrowById(@PathVariable("id") Long id) {
        // 获取数据
        BookBorrow bookBorrow = iBookBorrowService.selectBookBorrowById(id);

        // 构建响应数据
        return new Response("0", null, bookBorrow).getMap();
    }

    @PostMapping("")
    public Map insertBookBorrow(@RequestBody BookBorrow bookBorrow) {
        // 完善数据
        bookBorrow.setCreatedAt(LocalDateTime.now());
        bookBorrow.setUpdatedAt(LocalDateTime.now());

        // 添加数据
        iBookBorrowService.insertBookBorrow(bookBorrow);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @PutMapping("/{id}")
    public Map updateBookBorrow(@RequestBody BookBorrow bookBorrow, @PathVariable("id") Long id) {
        // 完善数据
        bookBorrow.setId(id);
        bookBorrow.setUpdatedAt(LocalDateTime.now());

        // 修改数据
        iBookBorrowService.updateBookBorrow(bookBorrow);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @DeleteMapping("/{id}")
    public Map deleteBookBorrow(BookBorrow bookBorrow, @PathVariable("id") Long id) {
        // 完善数据
        bookBorrow.setId(id);

        // 删除数据
        iBookBorrowService.deleteBookBorrow(bookBorrow);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }
}
