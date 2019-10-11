package com.xebia.assessmenttool.service.impl;

import com.xebia.assessmenttool.exception.UserCreationException;
import com.xebia.assessmenttool.repository.UserRepository;
import com.xebia.assessmenttool.security.entity.User;
import com.xebia.assessmenttool.service.RoleService;
import com.xebia.assessmenttool.service.MailService;
import com.xebia.assessmenttool.service.UserService;
import com.xebia.assessmenttool.util.UserPasswordGenerator;
import com.xebia.assessmenttool.web.request.CreateUserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    MailService mailService;

    @Value("${email.loginUrl}")
    private String loginUrl;

    @Value("${email.supportUrl}")
    private String supportUrl;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserPasswordGenerator userPasswordGenerator;

    @Autowired
    private RoleService roleService;

    @Override
    @Transactional
    public void createUser(CreateUserRequest createUserRequest) {
        if (userRepository.findByEmail(createUserRequest.getEmail()) != null) {
            throw new UserCreationException("User already exists for email " + createUserRequest.getEmail());
        }

        User user = new User();
        String password = userPasswordGenerator.generate();
        user.setEmail(createUserRequest.getEmail());
        user.setName(createUserRequest.getName());
        user.setActive(1);
        user.setPassword(passwordEncoder.encode(password));
        user.setRoles(
                createUserRequest.getRoles().stream()
                        .map(roleService::findByRoleName)
                        .collect(Collectors.toSet())
        );
        sendMail(user.getEmail(), password, user.getName());
        userRepository.save(user);

    }

    private void sendMail(String email, String password, String name) {
        Map<String, String> model = new HashMap();
        model.put("URL", loginUrl);
        model.put("name", name);
        model.put("supportUrl", supportUrl);
        model.put("Email", email);
        model.put("Password", password);
        mailService.sendMail("user_creation", model);
    }


}
