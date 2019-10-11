package com.xebia.assessmenttool.service.impl;

import com.xebia.assessmenttool.entity.Assessment;
import com.xebia.assessmenttool.repository.OrganisationRepository;
import com.xebia.assessmenttool.entity.Organisation;
import com.xebia.assessmenttool.repository.AssessmentRepository;
import com.xebia.assessmenttool.service.OrganisationService;
import com.xebia.assessmenttool.web.response.OrganisationResponse;
import com.xebia.assessmenttool.web.response.OrganisationResponseList;
import com.xebia.assessmenttool.web.response.AssessmentResponse;
import com.xebia.assessmenttool.web.response.AssessmentResponseList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class OrganisationServiceImpl implements OrganisationService {

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Override
    public ResponseEntity<OrganisationResponse> getAllOrganisation(Integer pageNo, Integer pageSize) {
        Pageable paging = PageRequest.of(pageNo, pageSize);

        Page<Organisation> pagedResult = organisationRepository.findAll(paging);

        if (pagedResult.isEmpty()) {
            return new ResponseEntity<OrganisationResponse>(new OrganisationResponse(new ArrayList<>(), false), HttpStatus.OK);
        }

        if (pagedResult.hasContent()) {
            boolean flag = pagedResult.hasNext();
            List<Organisation> list = pagedResult.getContent();
            List<OrganisationResponseList> organisationResponseLists = new ArrayList<>();
            for (Organisation organisation : list) {
                OrganisationResponseList organisationResponseList = new OrganisationResponseList();
                organisationResponseList.setOrgId(organisation.getId());
                organisationResponseList.setOrgIndustry(organisation.getOrgIndustry());
                organisationResponseList.setOrgName(organisation.getOrgName());
                organisationResponseLists.add(organisationResponseList);
            }
            return new ResponseEntity<OrganisationResponse>(new OrganisationResponse(organisationResponseLists, flag), HttpStatus.OK);
        } else {
            return new ResponseEntity<OrganisationResponse>(new OrganisationResponse(new ArrayList<>(), false), HttpStatus.OK);
        }
    }

    @Override
    public ResponseEntity<AssessmentResponse> getOrganisationTests(Integer orgId) {

        List<Assessment> organisationTestList = assessmentRepository.findByOrganisation(orgId);

        Collections.sort(organisationTestList, Collections.reverseOrder());


        List<AssessmentResponseList> assessmentResponseLists = new ArrayList<>();
        for (Assessment assessment : organisationTestList) {
            AssessmentResponseList assessmentResponseList = new AssessmentResponseList();
            assessmentResponseList.setCreatedAt(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(assessment.getCreatedDate()));
            assessmentResponseList.setFrameWork(assessment.getFrameworkSet());
            assessmentResponseList.setDraftQuestions(assessment.getDraftQuestions());
            assessmentResponseList.setCreatedBy(assessment.getCreatedBy());
            assessmentResponseList.setStatus(assessment.getStatus());
            assessmentResponseList.setTestName(assessment.getTestName());
            assessmentResponseList.setId(assessment.getId());
            assessmentResponseLists.add(assessmentResponseList);
        }
        return new ResponseEntity<AssessmentResponse>(new AssessmentResponse(assessmentResponseLists), HttpStatus.OK);
    }
}

