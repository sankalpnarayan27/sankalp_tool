package com.xebia.assessmenttool.web.response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class AssessmentResponse {

    List<AssessmentResponseList> assessmentResponses;

}
