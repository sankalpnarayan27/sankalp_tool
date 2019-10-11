package com.xebia.assessmenttool.exception;

public class RoleNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public RoleNotFoundException(String exception) {
        super(exception);
    }
}
