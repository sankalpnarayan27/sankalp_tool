package com.xebia.assessmenttool.web.request;

import com.xebia.assessmenttool.entity.DraftQuestion;

import java.util.List;

public class EditTestRequest {

    private int id;

    private int orgId;

    private String name;

    private List<String> framework;

    private List<DraftQuestion> draftQuestions;

    private String flag;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrgId() {
        return orgId;
    }

    public void setOrgId(int orgId) {
        this.orgId = orgId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getFramework() {
        return framework;
    }

    public void setFramework(List<String> framework) {
        this.framework = framework;
    }

    public List<DraftQuestion> getDraftQuestions() {
        return draftQuestions;
    }

    public void setDraftQuestions(List<DraftQuestion> draftQuestions) {
        this.draftQuestions = draftQuestions;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }
}
