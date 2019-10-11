package com.xebia.assessmenttool.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "DRAFT_QUESTIONS")
@JsonIgnoreProperties(value = {"assessment"})
public class DraftQuestion extends BaseEntity {

    @Column(name = "questions")
    private String questions;

    @OneToMany(mappedBy = "draftQuestions", cascade = CascadeType.ALL)
    private List<DraftFilters> draftFiltersList;

    @ManyToOne
    @JoinColumn(name = "organisation_test_id")
    @JsonIgnore
    private Assessment assessment;

}
