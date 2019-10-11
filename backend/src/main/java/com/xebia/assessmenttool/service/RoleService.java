package com.xebia.assessmenttool.service;

import com.xebia.assessmenttool.security.entity.Role;

public interface RoleService {

    Role findByRoleName(String role);
}
