package com.xebia.assessmenttool.service;

import com.xebia.assessmenttool.web.response.OrganisationResponse;
import com.xebia.assessmenttool.web.response.AssessmentResponse;
import org.springframework.http.ResponseEntity;

public interface OrganisationService {

    ResponseEntity<OrganisationResponse> getAllOrganisation(Integer pageNo, Integer pageSize);

    ResponseEntity<AssessmentResponse> getOrganisationTests(Integer id);
}
