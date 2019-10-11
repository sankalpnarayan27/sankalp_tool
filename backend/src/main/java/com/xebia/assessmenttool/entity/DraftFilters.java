package com.xebia.assessmenttool.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import com.xebia.assessmenttool.enums.FilterType;
import javax.persistence.*;

@Entity
@Table(name = "DRAFT_FILTERS")
@JsonIgnoreProperties(value = {"draftQuestionsSet"})
@Getter
@Setter
public class DraftFilters extends BaseEntity {

    @Column(name = "DRAFT_FILTER_NAME")
    private String draftFilterName;

    @Enumerated(EnumType.STRING)
    private FilterType filterType;

    @ManyToOne
    @JoinColumn(name = "draft_question_id")
    @JsonIgnore
    private DraftQuestion draftQuestions;
}
