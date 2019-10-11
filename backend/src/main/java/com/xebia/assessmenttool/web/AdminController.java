package com.xebia.assessmenttool.web;

import com.xebia.assessmenttool.service.UserService;
import com.xebia.assessmenttool.web.request.CreateUserRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private static final String SUCCESS = "SUCCESS";

    @Autowired
    private UserService userService;

    private static final Logger LOGGER = LoggerFactory.getLogger(AdminController.class);

    @PutMapping("/users")
    private String createUser(@RequestBody CreateUserRequest createUserRequest) {
        userService.createUser(createUserRequest);
        LOGGER.info("User Created Successfully.");
        return SUCCESS;
    }

}
