package com.xebia.assessmenttool.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "organisation")
@JsonIgnoreProperties(value = {"organisationTests"})
public class Organisation extends BaseEntity {

    @Column(name = "org_Name")
    private String orgName;

    @Column(name = "org_Industry")
    private String orgIndustry;

    @OneToMany(mappedBy = "organisation", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Assessment> organisationTests = new ArrayList<>();
}
