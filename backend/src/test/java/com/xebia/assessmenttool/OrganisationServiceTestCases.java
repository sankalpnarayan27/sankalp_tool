package com.xebia.assessmenttool;

import com.xebia.assessmenttool.entity.Assessment;
import com.xebia.assessmenttool.repository.OrganisationRepository;
import com.xebia.assessmenttool.entity.Organisation;
import com.xebia.assessmenttool.service.OrganisationService;
import com.xebia.assessmenttool.web.response.OrganisationResponse;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = AssessmentToolApplication.class)
@ActiveProfiles("test")
@Transactional
public class OrganisationServiceTestCases {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrganisationServiceTestCases.class);

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private OrganisationService organisationService;


    public void save() {
        Organisation organisation = new Organisation();
        Assessment assessment = new Assessment();
        List<Assessment> organisationTests = new ArrayList<>();
        organisation.setOrgIndustry("IT");
        organisation.setOrgName("Xebia");
        assessment.setCreatedBy("Vikas");
        assessment.setTestName("Test");
       // assessment.setCreatedAt(LocalDateTime.now());
        organisationTests.add(assessment);
        organisation.setOrganisationTests(organisationTests);
        organisationRepository.save(organisation);
    }

    @Test
    public void OrganisationListTest() {
        LOGGER.info("Testcase started");
        save();
        String orgName = "Xebia";
        ResponseEntity<OrganisationResponse> list = organisationService.getAllOrganisation(0, 4);
        Assert.assertEquals(orgName, list.getBody().getOrganisationList().get(0).getOrgName());
    }


}

