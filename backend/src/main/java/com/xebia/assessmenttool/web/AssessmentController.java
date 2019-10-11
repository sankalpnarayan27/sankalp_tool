package com.xebia.assessmenttool.web;

import javax.servlet.http.HttpServletRequest;

import com.xebia.assessmenttool.entity.Assessment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.xebia.assessmenttool.service.AssessmentService;
import com.xebia.assessmenttool.web.request.CreateTestRequest;
import com.xebia.assessmenttool.web.response.CreatedTestResponse;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class AssessmentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);


    @Autowired
    private AssessmentService organisationTestService;


    @PostMapping("/createAndDraftTest")
    private ResponseEntity<CreatedTestResponse> createTest(@RequestBody CreateTestRequest createTestRequest,
                                                           HttpServletRequest httpServletRequest) {
        LOGGER.info("Creating Test");
        String result = organisationTestService.saveorUpdate(createTestRequest, httpServletRequest);
        return new ResponseEntity<>(new CreatedTestResponse(result), HttpStatus.OK);
    }

    @GetMapping
    @RequestMapping("/editTest")
    private Assessment draftTest(@RequestParam Long organisationTestId) {
        LOGGER.info("Fetching Organisation test details from Organisation Test Id");
        Assessment assessment = organisationTestService.getTest(organisationTestId);
        return assessment;
    }


}
