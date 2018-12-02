package com.yyc.book.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

/**
 * <p>
 *  领域
 * </p>
 *
 * @author
 * @since 2018-12-01
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
public class BookBorrowVo extends BookBorrow {

    private String personUsername;

    private String bookName;

}
