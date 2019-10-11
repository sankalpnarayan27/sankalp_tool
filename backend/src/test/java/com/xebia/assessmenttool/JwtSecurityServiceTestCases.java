package com.xebia.assessmenttool;

import com.xebia.assessmenttool.repository.UserRepository;
import com.xebia.assessmenttool.security.entity.Role;
import com.xebia.assessmenttool.security.entity.User;
import com.xebia.assessmenttool.security.service.LoginService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;
import java.util.HashSet;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class JwtSecurityServiceTestCases {

    private static final String adminUser = "adminuser2@xebia.com";
    private static final String viewerUser = "vieweruser2@xebia.com";
    private static final String password = "Admin@123";
    private static final String adminRole = "ADMIN";
    private static final String viewerRole = "VIEWER";
    private static boolean firstTime = true;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private LoginService loginService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Before
    public void insertUser() {
        if (firstTime) {
            firstTime = false;
            userRepository.save(
                    new User(adminUser, passwordEncoder.encode(password), "Test", 1, new HashSet<>(Arrays.asList(new Role(20, adminRole))))
            );
            userRepository.save(
                    new User(viewerUser, passwordEncoder.encode(password), "Test", 1, new HashSet<>(Arrays.asList(new Role(21, viewerRole))))
            );
        }

    }

    @Test
    public void callSecuredApiWithoutToken() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.put(
                "/api/admin/users").contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"test@xebia.com\",\"name\":\"test\",\"roles\":[\"" + adminRole + "\"]}");
        mockMvc.perform(request).andExpect(status().isForbidden());
    }

    @Test
    public void callSecuredApiWithTokenWithINsufficientRole() throws Exception {
        String token = loginService.login(viewerUser, password);

        RequestBuilder request = MockMvcRequestBuilders.put(
                "/api/admin/users").contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"test@xebia.com\",\"name\":\"test\",\"roles\":[\"" + adminRole + "\"]}")
                .header("Authorization", token);
        mockMvc.perform(request).andExpect(status().isForbidden());
    }

    @Test
    public void callSecuredApiWithTokenWithRightRole() throws Exception {
        String token = loginService.login(adminUser, password);

        RequestBuilder request = MockMvcRequestBuilders.put(
                "/api/admin/users").contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"test@xebia.com\",\"name\":\"test\",\"roles\":[\"" + adminRole + "\"]}")
                .header("Authorization", token);
        mockMvc.perform(request).andExpect(status().isOk());
    }


}
