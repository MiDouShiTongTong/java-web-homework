package com.yyc.book.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.BookBorrow;
import com.yyc.book.domain.BookBorrow;
import com.yyc.book.mapper.BookBorrowMapper;
import com.yyc.book.service.IBookBorrowService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
@Service
public class BookBorrowServiceImpl extends ServiceImpl<BookBorrowMapper, BookBorrow> implements IBookBorrowService {
    public IPage<BookBorrow> selectBookBorrowList(BookBorrow bookBorrow, int current, int size) {
        // 构建查询条件
        QueryWrapper<BookBorrow> queryWrapper = new QueryWrapper<>();
        if (bookBorrow.getPersonId() != null) {
            queryWrapper.eq("person_id", bookBorrow.getPersonId());
        }
        // 构建分页条件
        Page<BookBorrow> page = new Page<>(current, size);
        // 返回查询结果
        return new BookBorrow().selectPage(page, queryWrapper);
    }

    public BookBorrow selectBookBorrowById(Long id) {
        return new BookBorrow().selectById(id);
    }

    public boolean insertBookBorrow(BookBorrow bookBorrow) {
        return bookBorrow.insert();
    }

    public boolean updateBookBorrow(BookBorrow bookBorrow) {
        return bookBorrow.updateById();
    }

    public boolean deleteBookBorrow(BookBorrow bookBorrow) {
        return bookBorrow.deleteById();
    }
}
