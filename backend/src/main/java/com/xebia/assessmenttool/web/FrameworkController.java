package com.xebia.assessmenttool.web;

import com.xebia.assessmenttool.service.FrameworkService;
import com.xebia.assessmenttool.web.response.FrameworkResponse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
@Slf4j
public class FrameworkController {

    private static final Logger LOGGER = LoggerFactory.getLogger(FrameworkController.class);

    @Autowired
    FrameworkService frameworkService;

    @GetMapping("/framework")
    private ResponseEntity<FrameworkResponse> getAllFramework() {
        LOGGER.info("Fetching list of frameworks");
        return frameworkService.getAllFramework();
    }
}
