package com.yyc.book.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.yyc.book.domain.SuperDomain;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.format.annotation.DateTimeFormat;

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
public class BookBorrow extends SuperDomain<BookBorrow> {

    private static final long serialVersionUID = 1L;

    private Integer personId;

    private Integer bookId;

    private Integer status;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime startAt;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime endAt;
}
