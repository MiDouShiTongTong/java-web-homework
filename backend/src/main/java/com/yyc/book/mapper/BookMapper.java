package com.yyc.book.mapper;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.Book;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yyc.book.domain.BookVo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
@Repository
public interface BookMapper extends BaseMapper<Book> {
    IPage<BookVo> selectBookList(Page<BookVo> page, BookVo bookVo);
}
