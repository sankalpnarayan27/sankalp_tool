package com.xebia.assessmenttool.web.request;


import com.xebia.assessmenttool.entity.DraftQuestion;
import com.xebia.assessmenttool.enums.Status;


import java.util.List;

public class CreateTestRequest {

    private long id;

    private long orgId;

    private String name;

    private List<String> framework;

    private List<DraftQuestion> draftQuestions;

    private Status flag;

    public long getOrgId() {
        return orgId;
    }

    public void setOrgId(long orgId) {
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

    public Status getFlag() {
        return flag;
    }

    public void setFlag(Status flag) {
        this.flag = flag;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
