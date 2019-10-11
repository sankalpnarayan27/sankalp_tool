package com.xebia.assessmenttool.util;

import org.springframework.stereotype.Component;

@Component
public class UserPasswordGenerator {

    public String generate() {
        return "Admin@123";
    }
}
