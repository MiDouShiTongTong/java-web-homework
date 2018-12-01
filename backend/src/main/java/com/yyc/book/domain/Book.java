package com.yyc.book.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.yyc.book.domain.SuperDomain;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

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
public class Book extends SuperDomain<Book> {

    private static final long serialVersionUID = 1L;

    private String name;

    private Integer bookCategoryId;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;

}
