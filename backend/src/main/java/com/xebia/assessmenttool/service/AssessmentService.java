package com.xebia.assessmenttool.service;

import javax.servlet.http.HttpServletRequest;

import com.xebia.assessmenttool.entity.Assessment;
import com.xebia.assessmenttool.web.request.CreateTestRequest;

public interface AssessmentService {

    String saveorUpdate(CreateTestRequest createTestRequest, HttpServletRequest httpServletRequest);

    //todo ID should always be long.
    Assessment getTest(Long assessmentId);

    Assessment findByTestCreatorName(String testCreatorName);

    String updateQuestionforTest(CreateTestRequest createTestRequest, Assessment assessment);


}
