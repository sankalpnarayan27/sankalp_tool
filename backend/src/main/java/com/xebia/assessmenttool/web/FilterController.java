package com.xebia.assessmenttool.web;

import com.xebia.assessmenttool.service.FilterService;
import com.xebia.assessmenttool.web.response.FilterResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FilterController {

    @Autowired
    FilterService filterService;

    @GetMapping("/filter")
    public ResponseEntity<?> getFilters() {
        FilterResponse filterResponse = filterService.getFilters();
        ResponseEntity<FilterResponse> response = new ResponseEntity<>(filterResponse, HttpStatus.OK);
        return response;
    }
}
