package com.xebia.assessmenttool.exception;

public class UserCreationException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public UserCreationException(String exception) {
        super(exception);
    }
}
