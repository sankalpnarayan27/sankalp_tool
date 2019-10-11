package com.xebia.assessmenttool.web.response;

import com.xebia.assessmenttool.entity.Filters;
import java.util.List;

public class FilterResponse {

    List<Filters> filtersList;

    public List<Filters> getFiltersList() {
        return filtersList;
    }

    public void setFiltersList(List<Filters> filtersList) {
        this.filtersList = filtersList;
    }

    public FilterResponse(List<Filters> filtersList) {
        this.filtersList = filtersList;
    }
}
