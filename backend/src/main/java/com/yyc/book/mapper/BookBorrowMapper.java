package com.yyc.book.mapper;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.BookBorrow;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yyc.book.domain.BookBorrowVo;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
public interface BookBorrowMapper extends BaseMapper<BookBorrow> {
    IPage<BookBorrowVo> selectBookBorrowList(Page<BookBorrowVo> page, BookBorrowVo bookBorrowVo);
}
