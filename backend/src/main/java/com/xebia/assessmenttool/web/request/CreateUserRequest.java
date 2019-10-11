package com.xebia.assessmenttool.web.request;


import java.util.ArrayList;
import java.util.List;

public class CreateUserRequest {

    private String email;
    private String name;
    private List<String> projects = new ArrayList<>();
    private List<String> roles = new ArrayList<>();

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getProjects() {
        return projects;
    }

    public void setProjects(List<String> projects) {
        this.projects = projects;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
