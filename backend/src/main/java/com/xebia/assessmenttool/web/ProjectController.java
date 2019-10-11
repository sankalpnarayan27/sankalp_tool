package com.xebia.assessmenttool.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProjectController.class);

    @GetMapping
    private List<String> getProjects() {
        LOGGER.info("Request to fetch project received");
        return Arrays.asList("Mckinsy", "Test2");
    }

}
