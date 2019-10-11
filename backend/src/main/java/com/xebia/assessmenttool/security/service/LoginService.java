package com.xebia.assessmenttool.security.service;

import com.xebia.assessmenttool.security.entity.User;

public interface LoginService {

    String login(String username, String password);

    User saveUser(User user);

    boolean logout(String token);

    Boolean isValidToken(String token);

    String createNewToken(String token);
}
