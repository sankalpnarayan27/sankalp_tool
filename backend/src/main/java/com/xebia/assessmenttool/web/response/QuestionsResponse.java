package com.xebia.assessmenttool.web.response;

import com.xebia.assessmenttool.entity.Question;

import java.util.Set;

public class QuestionsResponse {

    Set<Question> questionsList;

    public Set<Question> getQuestionsList() {
        return questionsList;
    }

    public void setQuestionsList(Set<Question> questionsList) {
        this.questionsList = questionsList;
    }

    public QuestionsResponse(Set<Question> questionsList) {
        this.questionsList = questionsList;
    }
}
