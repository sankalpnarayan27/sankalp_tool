package com.xebia.assessmenttool.web;


import com.xebia.assessmenttool.service.QuestionsService;
import com.xebia.assessmenttool.web.response.QuestionsResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class QuestionsController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionsController.class);

    @Autowired
    private QuestionsService questionsService;

    @GetMapping("/questions")
    private ResponseEntity<QuestionsResponse> getQuestionsByFramework(@RequestParam List<String> framework) {
        LOGGER.info("Fetching list of questions By framework");
        return new ResponseEntity<>(questionsService.getAllQuestionsByFramework(framework), HttpStatus.OK);
    }


}
