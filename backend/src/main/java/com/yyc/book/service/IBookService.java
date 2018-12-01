package com.yyc.book.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.yyc.book.domain.Book;
import com.baomidou.mybatisplus.extension.service.IService;
import com.yyc.book.domain.BookVo;


/**
 * <p>
 *  服务类
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
public interface IBookService extends IService<Book> {
   IPage<BookVo> selectBookList(BookVo bookVo, int current, int size);

   Book selectBookById(Long id);

   boolean insertBook(Book book);

   boolean updateBook(Book book);

   boolean deleteBook(Book book);
}
