package com.xebia.assessmenttool.service.impl;

import com.xebia.assessmenttool.entity.Filters;
import com.xebia.assessmenttool.repository.FilterRepository;
import com.xebia.assessmenttool.service.FilterService;
import com.xebia.assessmenttool.web.response.FilterResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FilterServiceImpl implements FilterService {

    @Autowired
    FilterRepository filterRepository;

    @Override
    public FilterResponse getFilters() {
        List<Filters> filtersList = filterRepository.findAll();
        return new FilterResponse(filtersList);
    }
}
