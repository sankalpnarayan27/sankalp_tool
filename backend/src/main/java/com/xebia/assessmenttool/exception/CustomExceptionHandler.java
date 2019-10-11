package com.xebia.assessmenttool.exception;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@ControllerAdvice
@RestController
public class CustomExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomExceptionHandler.class);

    @ExceptionHandler(UserCreationException.class)
    public final ResponseEntity<String> handleInternalServerErrorException(UserCreationException ex, WebRequest request) {
        return new ResponseEntity<>(ex.getMessage(), INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(EmailException.class)
    public final ResponseEntity<String> handleInternalServerErrorException(EmailException ex, WebRequest request) {
        return new ResponseEntity<>(ex.getMessage(), INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<String> handleAllException(Exception ex, WebRequest request) {
        LOGGER.error("Exception occured while processing", ex);
        return new ResponseEntity<>(ex.getMessage(), INTERNAL_SERVER_ERROR);
    }

}
