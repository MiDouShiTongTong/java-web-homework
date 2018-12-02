package com.yyc.book.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.BookBorrow;
import com.yyc.book.domain.BookBorrowVo;
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
    public IPage<BookBorrowVo> selectBookBorrowList(BookBorrowVo bookBorrowVo, int current, int size) {
        // 构建分页条件
        Page<BookBorrowVo> page = new Page<>(current, size);
        page.setAsc("id");
        // 返回查询结果
        return baseMapper.selectBookBorrowList(page, bookBorrowVo);
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
