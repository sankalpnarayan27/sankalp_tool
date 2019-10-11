package com.xebia.assessmenttool.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.xebia.assessmenttool.enums.FilterType;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "FILTERS")
@JsonIgnoreProperties(value = { "questionsList" })
@Setter
@Getter
public class Filters extends BaseEntity {

    @Column(name = "FILTER_NAME")
    private String filterName;

    @Enumerated(EnumType.STRING)
    private FilterType filterType;

    @ManyToMany(mappedBy = "filterList")
    private Set<Question> questionsList = new HashSet<>();

}
