package com.yyc.book.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.Book;
import com.yyc.book.domain.Book;
import com.yyc.book.domain.BookVo;
import com.yyc.book.mapper.BookMapper;
import com.yyc.book.service.IBookService;
import com.yyc.book.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
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
@RequestMapping("/book")
public class BookController {
    @Autowired
    IBookService iBookService;

    @GetMapping("")
    public Map selectBookList(
        BookVo bookVo,
        @RequestParam(value = "current", defaultValue = "1") Integer current,
        @RequestParam(value = "size", defaultValue = "999") Integer size
    ) {
        // 构建响应数据
        return new Response("0", null, iBookService.selectBookList(bookVo, current, size)).getMap();
    }

    @GetMapping("/{id}")
    public Map selectBookById(@PathVariable("id") Long id) {
        // 获取数据
        Book book = iBookService.selectBookById(id);

        // 构建响应数据
        return new Response("0", null, book).getMap();
    }

    @PostMapping("")
    public Map insertBook(@RequestBody Book book) {
        // 完善数据
        book.setCreatedAt(LocalDateTime.now());
        book.setUpdatedAt(LocalDateTime.now());

        // 添加数据
        iBookService.insertBook(book);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @PutMapping("/{id}")
    public Map updateBook(@RequestBody Book book, @PathVariable("id") Long id) {
        // 完善数据
        book.setId(id);
        book.setUpdatedAt(LocalDateTime.now());

        // 修改数据
        iBookService.updateBook(book);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @DeleteMapping("/{id}")
    public Map deleteBook(Book book, @PathVariable("id") Long id) {
        // 完善数据
        book.setId(id);

        // 删除数据
        iBookService.deleteBook(book);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }
}
