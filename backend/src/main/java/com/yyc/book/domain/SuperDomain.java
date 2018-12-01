package com.yyc.book.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * Description:
 * 对于有自增主键id的表，建议继承本类，而不是自实现id属性
 *
 */
@Getter
@Setter
public class SuperDomain<T extends Model> extends Model<T> {

    private static final long serialVersionUID = -9189687199157580877L;

    @TableId(value = "id", type = IdType.NONE)
    private Long id;

    @Override
    protected Serializable pkVal() {
        return this.id;
    }
}
