package com.xebia.assessmenttool.service.impl;

import com.xebia.assessmenttool.exception.RoleNotFoundException;
import com.xebia.assessmenttool.repository.RoleRepository;
import com.xebia.assessmenttool.security.entity.Role;
import com.xebia.assessmenttool.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    @Transactional(readOnly = true)
    public Role findByRoleName(String role) {
        Role roleDetails = roleRepository.findByRole(role);
        if (null == roleDetails) {
            throw new RoleNotFoundException("Role details not found for " + role);
        }
        return roleDetails;
    }

}
