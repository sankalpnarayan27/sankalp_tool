package com.xebia.assessmenttool.repository;

import com.xebia.assessmenttool.entity.Framework;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FrameworkRepository extends JpaRepository<Framework, Integer> {

    List<Framework> findByFrameworkIn(List<String> s);

}


