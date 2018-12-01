package com.yyc.book.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.yyc.book.domain.BookCategory;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author
 * @since 2018-11-30
 */
public interface IBookCategoryService extends IService<BookCategory> {
    IPage<BookCategory> selectBookCategoryList(BookCategory bookCategory, int current, int size);

    BookCategory selectBookCategoryById(Long id);

    boolean insertBookCategory(BookCategory bookCategory);

    boolean updateBookCategory(BookCategory bookCategory);

    boolean deleteBookCategory(BookCategory bookCategory);
}
