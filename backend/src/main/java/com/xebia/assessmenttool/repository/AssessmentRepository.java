package com.xebia.assessmenttool.repository;

import java.util.List;
import java.util.Optional;

import com.xebia.assessmenttool.entity.Assessment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AssessmentRepository extends JpaRepository<Assessment, Long> {

    @Query(value = "select * from organisation_test where org_id =?1", nativeQuery = true)
    List<Assessment> findByOrganisation(@Param("org_id") int orgId);


    Optional<Assessment> findByTestName(String testCreatername);

}
