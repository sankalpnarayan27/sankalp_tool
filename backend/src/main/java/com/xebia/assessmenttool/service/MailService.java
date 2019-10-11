package com.xebia.assessmenttool.service;

import java.util.Map;

public interface MailService {

    void sendMail(String type, Map<String, String> properties);
}
