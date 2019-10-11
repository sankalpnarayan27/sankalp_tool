package com.xebia.assessmenttool.service.impl;

import com.xebia.assessmenttool.entity.Framework;
import com.xebia.assessmenttool.repository.FrameworkRepository;
import com.xebia.assessmenttool.service.FrameworkService;
import com.xebia.assessmenttool.web.response.FrameworkResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FrameworkServiceImpl implements FrameworkService {

    @Autowired
    FrameworkRepository frameworkRepository;

    @Override
    public ResponseEntity<FrameworkResponse> getAllFramework() {
        List<Framework> list = frameworkRepository.findAll();
        return new ResponseEntity<>(new FrameworkResponse(list), HttpStatus.OK);
    }
}
