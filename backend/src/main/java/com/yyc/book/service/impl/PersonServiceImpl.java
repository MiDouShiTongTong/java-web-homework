package com.yyc.book.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yyc.book.domain.Person;
import com.yyc.book.mapper.PersonMapper;
import com.yyc.book.service.IPersonService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author
 * @since 2018-11-30
 */
@Service
public class PersonServiceImpl extends ServiceImpl<PersonMapper, Person> implements IPersonService {
    public IPage<Person> selectPersonList(Person person, int current, int size) {
        // 构建查询条件
        QueryWrapper<Person> queryWrapper = new QueryWrapper<>();
        if (person.getUsername() != null) {
            queryWrapper.like("username", person.getUsername());
        }
        if (person.getGender() != null && person.getGender() != 0) {
            queryWrapper.eq("gender", person.getGender());
        }
        // 构建分页条件
        Page<Person> page = new Page<>(current, size);
        page.setAsc("id");
        // 返回查询结果
        return new Person().selectPage(page, queryWrapper);
    }

    public Person selectPersonById(Long id) {
        return new Person().selectById(id);
    }

    public boolean insertPerson(Person person) {
        return person.insert();
    }

    public boolean updatePerson(Person person) {
        return person.updateById();
    }

    public boolean deletePerson(Person person) {
        return person.deleteById();
    }
}
