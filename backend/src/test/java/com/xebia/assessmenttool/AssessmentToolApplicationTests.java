package com.xebia.assessmenttool;

import com.xebia.assessmenttool.service.UserService;
import com.xebia.assessmenttool.web.request.CreateUserRequest;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AssessmentToolApplication.class)
@ActiveProfiles("test")
public class AssessmentToolApplicationTests {

	@Test
	public void contextLoads() {
	}



}



