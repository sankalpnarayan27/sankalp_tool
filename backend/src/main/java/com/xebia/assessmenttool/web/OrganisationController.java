package com.xebia.assessmenttool.web;

import com.xebia.assessmenttool.service.OrganisationService;
import com.xebia.assessmenttool.web.response.OrganisationResponse;
import com.xebia.assessmenttool.web.response.AssessmentResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class OrganisationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrganisationController.class);

    @Autowired
    private OrganisationService organisationService;

   @GetMapping("/organisation")
    public ResponseEntity<OrganisationResponse> getOrganisations(@RequestParam(defaultValue = "0") Integer pageNo,
                                                                  @RequestParam(defaultValue = "4") Integer pageSize) {
        LOGGER.info("Fetching list of organisation");
        return organisationService.getAllOrganisation(pageNo, pageSize);

    }

    @GetMapping ("/assessment")
    public ResponseEntity<AssessmentResponse> getAssessment(@RequestParam Integer orgId) {          //todo ID shall always be long
        LOGGER.info("Fetching list of organisationTest");
        return organisationService.getOrganisationTests(orgId);
    }
}
