package com.xebia.assessmenttool.service;

import com.xebia.assessmenttool.web.response.QuestionsResponse;
import java.util.List;

public interface QuestionsService {

     QuestionsResponse getAllQuestionsByFramework(List<String> framework);



}
