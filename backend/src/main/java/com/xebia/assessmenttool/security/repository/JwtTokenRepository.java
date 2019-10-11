package com.xebia.assessmenttool.security.repository;

import com.xebia.assessmenttool.security.entity.JwtToken;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class JwtTokenRepository {

    HashMap<String, JwtToken> tokens = new HashMap<>();


    public void delete(String token) {
        tokens.remove(token);
    }


    public boolean isPresent(String token) {
        return tokens.containsKey(token);
    }

    public void save(JwtToken jwtToken) {
        tokens.put(jwtToken.getToken(), jwtToken);
    }
}

