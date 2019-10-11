package com.xebia.assessmenttool.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "questions")
@JsonIgnoreProperties(value = {"frameworkList"})
public class Question extends BaseEntity {

    @Column(name = "questions")
    private String question;           //todo name shall not be a plural.

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "QUESTIONS_FILTER",
            joinColumns = @JoinColumn(name = "QUESTION_ID"),
            inverseJoinColumns = @JoinColumn(name = "FILTER_ID"))
    private Set<Filters> filterList = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "QUESTIONS_FRAMEWORK",
            joinColumns = @JoinColumn(name = "QUESTION_ID"),
            inverseJoinColumns = @JoinColumn(name = "FRAMEWORK_ID"))
    private Set<Framework> frameworkList = new HashSet<>();             //todo property should be renamed to frameworks.
}
