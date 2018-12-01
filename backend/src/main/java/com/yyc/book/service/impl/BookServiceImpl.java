package com.yyc.book.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.Book;
import com.yyc.book.domain.BookVo;
import com.yyc.book.mapper.BookMapper;
import com.yyc.book.service.IBookService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author
 * @since 2018-11-30
 */
@Service
public class BookServiceImpl extends ServiceImpl<BookMapper, Book> implements IBookService {

    public IPage<BookVo> selectBookList(BookVo bookVo, int current, int size) {
        Page<BookVo> page = new Page<>(current, size);
        return baseMapper.selectBookList(page, bookVo);
    }

    public Book selectBookById(Long id) {
        return new Book().selectById(id);
    }

    public boolean insertBook(Book book) {
        return book.insert();
    }

    public boolean updateBook(Book book) {
        return book.updateById();
    }

    public boolean deleteBook(Book book) {
        return book.deleteById();
    }
}
