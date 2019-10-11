package com.xebia.assessmenttool.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "FRAMEWORK")
@JsonIgnoreProperties(value = {"organisationTestSet", "questions"})
@Setter
@Getter
public class Framework extends BaseEntity {

    @Column(name = "FRM_NAME")
    private String framework;

    @ManyToMany(mappedBy = "frameworkList")
    private Set<Question> questions = new HashSet<>();

    @ManyToMany(mappedBy = "frameworkSet")
    private Set<Assessment> organisationTestSet = new HashSet<>();

}
