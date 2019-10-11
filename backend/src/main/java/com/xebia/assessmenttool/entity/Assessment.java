package com.xebia.assessmenttool.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.xebia.assessmenttool.enums.Status;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;

@Setter
@Getter
@Entity
@Table(name = "organisationTest")                           //todo this table needs to be renamed in the database.
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Assessment extends BaseEntity implements Comparable<Assessment> {

    @ManyToOne
    @JoinColumn(name = "org_id")
    @JsonBackReference
    private Organisation organisation;

    @Column(name = "testName")
    private String testName;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "ORGANISATION_TEST_FRAMEWORK",
            joinColumns = @JoinColumn(name = "ORGANISATION_TEST_ID"),
            inverseJoinColumns = @JoinColumn(name = "FRAMEWORK_ID"))
    private Set<Framework> frameworkSet = new HashSet<>();

    @OneToMany(mappedBy = "assessment", cascade = CascadeType.ALL)
    private List<DraftQuestion> draftQuestions = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Status status;


    @Override
    public int compareTo(Assessment o) {
        return getCreatedDate().compareTo(o.getCreatedDate());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Assessment)) {
            return false;
        }
        Assessment that = (Assessment) o;
        return getCreatedDate().equals(that.getCreatedDate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCreatedDate());
    }
}
