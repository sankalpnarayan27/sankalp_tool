package com.xebia.assessmenttool.security.service.impl;

import com.xebia.assessmenttool.security.entity.RepositoryUserDetails;
import com.xebia.assessmenttool.security.entity.Role;
import com.xebia.assessmenttool.security.entity.User;
import com.xebia.assessmenttool.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("Invalid username or password.");
        }
        String[] authorities = new String[user.getRoles().size()];
        int count = 0;
        for (Role role : user.getRoles()) {
            authorities[count] = "ROLE_" + role.getRole();
            count++;
        }
        RepositoryUserDetails userDetails = new RepositoryUserDetails(user.getEmail(), user.getPassword(), user.getActive(),
                false, false, true, authorities);
        return userDetails;
    }


}
