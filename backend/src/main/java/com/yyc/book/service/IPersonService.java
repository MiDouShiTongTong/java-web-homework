package com.yyc.book.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.yyc.book.domain.Person;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author
 * @since 2018-11-30
 */
public interface IPersonService extends IService<Person> {
    IPage<Person> selectPersonList(Person person, int current, int size);

    Person selectPersonById(Long id);

    boolean insertPerson(Person person);

    boolean updatePerson(Person person);

    boolean deletePerson(Person person);
}
