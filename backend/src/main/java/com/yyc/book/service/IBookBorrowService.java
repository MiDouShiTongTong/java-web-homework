package com.yyc.book.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.yyc.book.domain.BookBorrow;
import com.baomidou.mybatisplus.extension.service.IService;
import com.yyc.book.domain.BookBorrowVo;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
public interface IBookBorrowService extends IService<BookBorrow> {
    IPage<BookBorrowVo> selectBookBorrowList(BookBorrowVo bookBorrowVo, int current, int size);

    BookBorrow selectBookBorrowById(Long id);

    boolean insertBookBorrow(BookBorrow bookBorrow);

    boolean updateBookBorrow(BookBorrow bookBorrow);

    boolean deleteBookBorrow(BookBorrow bookBorrow);
}
