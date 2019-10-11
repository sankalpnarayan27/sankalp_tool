package com.xebia.assessmenttool;

import com.xebia.assessmenttool.util.UserPasswordGenerator;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AssessmentToolApplication.class)
@ActiveProfiles("test")
public class PasswordGeneratorTestCases {

    @Autowired
    private UserPasswordGenerator userPasswordGenerator;

    @Test
    public void assertGeneratedPassword() {
        Assert.assertEquals("Admin@123", userPasswordGenerator.generate());
    }

}
