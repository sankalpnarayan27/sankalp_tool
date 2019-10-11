package com.xebia.assessmenttool.service;

import com.xebia.assessmenttool.web.response.FrameworkResponse;
import org.springframework.http.ResponseEntity;

public interface FrameworkService {

    ResponseEntity<FrameworkResponse> getAllFramework();
}
