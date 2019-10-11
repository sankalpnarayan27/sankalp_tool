package com.xebia.assessmenttool.web.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OrganisationResponse {

    List<OrganisationResponseList> organisationList;
    boolean hasNext;

    public List<OrganisationResponseList> getOrganisationList() {
        return organisationList;
    }

    public void setOrganisationList(List<OrganisationResponseList> organisationList) {
        this.organisationList = organisationList;
    }

    public boolean isHasNext() {
        return hasNext;
    }

    public void setHasNext(boolean hasNext) {
        this.hasNext = hasNext;
    }

    public OrganisationResponse(List<OrganisationResponseList> organisationList, boolean hasNext) {
        this.organisationList = organisationList;
        this.hasNext = hasNext;
    }
}
