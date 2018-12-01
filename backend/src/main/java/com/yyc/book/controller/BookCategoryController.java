package com.yyc.book.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.yyc.book.domain.BookCategory;
import com.yyc.book.domain.BookCategory;
import com.yyc.book.service.IBookCategoryService;
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
@RequestMapping("/bookCategory")
public class BookCategoryController {
    @Autowired
    IBookCategoryService iBookCategoryService;

    @GetMapping("")
    public Map selectBookCategoryList(
        BookCategory bookCategory,
        @RequestParam(value = "current", defaultValue = "1") int current,
        @RequestParam(value = "size", defaultValue = "2000") int size
    ) {
        // 构建响应数据
        return new Response("0", null, iBookCategoryService.selectBookCategoryList(bookCategory, current, size)).getMap();
    }

    @GetMapping("/{id}")
    public Map selectBookCategoryById(@PathVariable("id") Long id) {
        // 获取数据
        BookCategory bookCategory = iBookCategoryService.selectBookCategoryById(id);

        // 构建响应数据
        return new Response("0", null, bookCategory).getMap();
    }

    @PostMapping("")
    public Map insertBookCategory(@RequestBody BookCategory bookCategory) {
        // 完善数据
        bookCategory.setCreatedAt(LocalDateTime.now());
        bookCategory.setUpdatedAt(LocalDateTime.now());

        // 添加数据
        iBookCategoryService.insertBookCategory(bookCategory);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @PutMapping("/{id}")
    public Map updateBookCategory(@RequestBody BookCategory bookCategory, @PathVariable("id") Long id) {
        // 完善数据
        bookCategory.setId(id);
        bookCategory.setUpdatedAt(LocalDateTime.now());

        // 修改数据
        iBookCategoryService.updateBookCategory(bookCategory);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }

    @DeleteMapping("/{id}")
    public Map deleteBookCategory(BookCategory bookCategory, @PathVariable("id") Long id) {
        // 完善数据
        bookCategory.setId(id);

        // 删除数据
        iBookCategoryService.deleteBookCategory(bookCategory);

        // 构建响应数据
        return new Response("0", null, null).getMap();
    }
}
