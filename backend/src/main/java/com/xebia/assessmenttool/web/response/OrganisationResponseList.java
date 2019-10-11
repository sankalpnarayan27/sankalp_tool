package com.xebia.assessmenttool.web.response;

public class OrganisationResponseList {

    private Long orgId;

    private String orgName;

    private String orgIndustry;

    public Long getOrgId() {
        return orgId;
    }

    public void setOrgId(Long orgId) {
        this.orgId = orgId;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
    }

    public String getOrgIndustry() {
        return orgIndustry;
    }

    public void setOrgIndustry(String orgIndustry) {
        this.orgIndustry = orgIndustry;
    }


}
