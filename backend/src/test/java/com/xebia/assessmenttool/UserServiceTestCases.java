package com.xebia.assessmenttool;

import com.xebia.assessmenttool.exception.RoleNotFoundException;
import com.xebia.assessmenttool.exception.UserCreationException;
import com.xebia.assessmenttool.repository.RoleRepository;
import com.xebia.assessmenttool.repository.UserRepository;
import com.xebia.assessmenttool.security.entity.Role;
import com.xebia.assessmenttool.security.entity.User;
import com.xebia.assessmenttool.service.MailService;
import com.xebia.assessmenttool.service.UserService;
import com.xebia.assessmenttool.web.request.CreateUserRequest;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AssessmentToolApplication.class)
@ActiveProfiles("test")
public class UserServiceTestCases {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @MockBean
    private MailService mailService;


    @Test(expected = UserCreationException.class)
    public void createUserShouldThrowExceptionIfUserExists() {
        String email = "existinguser1@xebia.com";

        userRepository.save(new User(email, "Admin@123", "Test", 1, null));

        CreateUserRequest userRequest = new CreateUserRequest();
        userRequest.setEmail(email);
        userRequest.setName("Test");
        userService.createUser(userRequest);
    }


    @Test(expected = RoleNotFoundException.class)
    public void createUserShouldThrowExceptionIfRoleNotFound() {
        String email = "existinguser2@xebia.com";

        CreateUserRequest userRequest = new CreateUserRequest();
        userRequest.setEmail(email);
        userRequest.setName("Test");
        userRequest.setRoles(Arrays.asList("ROLE_NOT_CREATED"));
        userService.createUser(userRequest);
    }

    @Test()
    public void createUserWithoutRoleAndCheckInDb() {
        String email = "existinguser3@xebia.com";
        String name = "Test";

        CreateUserRequest userRequest = new CreateUserRequest();
        userRequest.setEmail(email);
        userRequest.setName(name);
        userService.createUser(userRequest);

        User dbUser = userRepository.findByEmail(email);
        Assert.assertNotNull(dbUser);
        Assert.assertNotNull(dbUser.getUserId());
        Assert.assertEquals(email, dbUser.getEmail());
        Assert.assertEquals(name, dbUser.getName());
    }

    @Test()
    public void createUserWithRoleAndCheckInDb() {
        String email = "existinguser4@xebia.com";
        String name = "Test";
        String roleName = "USER_SERVICE_TEST_ROLE";

        roleRepository.save(new Role(1, roleName));

        CreateUserRequest userRequest = new CreateUserRequest();
        userRequest.setEmail(email);
        userRequest.setName(name);
        userRequest.setRoles(Arrays.asList(roleName));
        userService.createUser(userRequest);

        User dbUser = userRepository.findByEmail(email);
        Assert.assertNotNull(dbUser);
        Assert.assertNotNull(dbUser.getUserId());
        Assert.assertEquals(email, dbUser.getEmail());
        Assert.assertEquals(name, dbUser.getName());
        Assert.assertNotNull(dbUser.getRoles());
        Assert.assertEquals(1, dbUser.getRoles().size());
        Assert.assertEquals(roleName, new ArrayList<Role>(dbUser.getRoles()).get(0).getRole());
    }
}
