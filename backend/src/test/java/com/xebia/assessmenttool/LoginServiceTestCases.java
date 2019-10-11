package com.xebia.assessmenttool;

import com.xebia.assessmenttool.repository.UserRepository;
import com.xebia.assessmenttool.security.entity.Role;
import com.xebia.assessmenttool.security.entity.User;
import com.xebia.assessmenttool.security.provider.JwtTokenProvider;
import com.xebia.assessmenttool.security.repository.JwtTokenRepository;
import com.xebia.assessmenttool.security.service.LoginService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.HashSet;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AssessmentToolApplication.class)
@ActiveProfiles("test")
public class LoginServiceTestCases {

    private static final String adminUser = "adminuser@xebia.com";
    private static final String password = "Admin@123";
    private static final String adminRole = "LoginAdmin";
    private static boolean firstTime = true;

    @Autowired
    private LoginService loginService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenRepository jwtTokenRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Before
    public void insertUser() {
        if (firstTime) {
            firstTime = false;
            userRepository.save(
                    new User(adminUser, passwordEncoder.encode(password), "Test", 1, new HashSet<>(Arrays.asList(new Role(10, adminRole))))
            );
        }

    }


    @Test(expected = RuntimeException.class)
    public void loginForIncorrectUser() {
        loginService.login("unknownuser@xebia.com", password);
    }

    @Test
    public void loginForCorrectUserAndVerifyToken() {
        String token = loginService.login(adminUser, password);
        Assert.assertNotNull(token);
        Assert.assertTrue(jwtTokenRepository.isPresent(token));
        Assert.assertTrue(loginService.isValidToken(token));
    }

    @Test
    public void loginAndLogout() {
        String token = loginService.login(adminUser, password);
        Assert.assertNotNull(token);
        Assert.assertTrue(jwtTokenRepository.isPresent(token));
        loginService.logout(token);
        Assert.assertFalse(jwtTokenRepository.isPresent(token));
    }

    @Test
    public void loginAndRefreshToken() {
        String token = loginService.login(adminUser, password);
        Assert.assertNotNull(token);
        Assert.assertTrue(jwtTokenRepository.isPresent(token));
        Assert.assertTrue(loginService.isValidToken(token));

        String newToken = loginService.createNewToken(token);
        Assert.assertTrue(jwtTokenRepository.isPresent(newToken));
        Assert.assertTrue(loginService.isValidToken(newToken));
    }

    @Test
    public void loginAndValidateRole() {
        String token = loginService.login(adminUser, password);
        Assert.assertNotNull(token);
        Assert.assertTrue(jwtTokenRepository.isPresent(token));

        UserDetails userDetails = jwtTokenProvider.getUserDetails(token);
        Assert.assertNotNull(userDetails);
        Assert.assertEquals(adminUser, userDetails.getUsername());
        Assert.assertNotNull(userDetails.getAuthorities());
        Assert.assertEquals(1, userDetails.getAuthorities().size());
        Assert.assertEquals("ROLE_" + adminRole, userDetails.getAuthorities().stream().findFirst().get().toString());

    }


}
