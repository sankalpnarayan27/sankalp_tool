package com.xebia.assessmenttool.web.request;

import java.util.List;

import com.xebia.assessmenttool.entity.DraftQuestion;

public class EditQuestionFilters {

    private List<DraftQuestion> draftQuestions;

    public List<DraftQuestion> getDraftQuestions() {
        return draftQuestions;
    }

    public void setDraftQuestions(List<DraftQuestion> draftQuestions) {
        this.draftQuestions = draftQuestions;
    }


}
