package com.yyc.book.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.BookCategory;
import com.yyc.book.mapper.BookCategoryMapper;
import com.yyc.book.service.IBookCategoryService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author
 * @since 2018-11-30
 */
@Service
public class BookCategoryServiceImpl extends ServiceImpl<BookCategoryMapper, BookCategory> implements IBookCategoryService {
    public IPage<BookCategory> selectBookCategoryList(BookCategory bookCategory, int current, int size) {
        // 构建查询条件
        QueryWrapper<BookCategory> queryWrapper = new QueryWrapper<>();
        if (bookCategory.getName() != null) {
            queryWrapper.like("name", bookCategory.getName());
        }
        // 构建分页条件
        Page<BookCategory> page = new Page<>(current, size);
        page.setAsc("id");
        // 返回查询结果
        return new BookCategory().selectPage(page, queryWrapper);
    }

    public BookCategory selectBookCategoryById(Long id) {
        return new BookCategory().selectById(id);
    }

    public boolean insertBookCategory(BookCategory bookCategory) {
        return bookCategory.insert();
    }

    public boolean updateBookCategory(BookCategory bookCategory) {
        return bookCategory.updateById();
    }

    public boolean deleteBookCategory(BookCategory bookCategory) {
        return bookCategory.deleteById();
    }
}
