package com.yyc.book.domain;

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
public class Manager extends SuperDomain<Manager> {

    private static final long serialVersionUID = 1L;

    private String username;

    private String password;

}
