package com.xebia.assessmenttool.web.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.xebia.assessmenttool.entity.DraftQuestion;
import com.xebia.assessmenttool.entity.Framework;
import com.xebia.assessmenttool.enums.Status;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;
import java.util.Set;

@Getter
@Setter
public class AssessmentResponseList {

    private Long id;

    private String testName;

    @JsonIgnoreProperties("organisationTestSet")
    private Set<Framework> frameWork;

    @JsonIgnoreProperties("organisationTestSet")
    private List<DraftQuestion> draftQuestions;

    private String createdBy;                        //todo why do we need CreatedBy and CreatedAt

    private String createdAt;

    @Enumerated(EnumType.STRING)
    private Status status;

}
