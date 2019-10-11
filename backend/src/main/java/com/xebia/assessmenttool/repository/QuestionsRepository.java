package com.xebia.assessmenttool.repository;

import com.xebia.assessmenttool.entity.Framework;
import com.xebia.assessmenttool.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface QuestionsRepository extends JpaRepository<Question, Integer> {

    Set<Question> findByFrameworkListIn(List<Framework> framework);

}
