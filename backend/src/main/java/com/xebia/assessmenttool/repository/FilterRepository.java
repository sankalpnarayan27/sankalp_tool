package com.xebia.assessmenttool.repository;

import com.xebia.assessmenttool.entity.Filters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilterRepository extends JpaRepository<Filters, Integer> {
}
