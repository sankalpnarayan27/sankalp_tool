package com.xebia.assessmenttool.service.impl;

import com.xebia.assessmenttool.entity.Framework;
import com.xebia.assessmenttool.entity.Question;
import com.xebia.assessmenttool.repository.FrameworkRepository;
import com.xebia.assessmenttool.repository.QuestionsRepository;
import com.xebia.assessmenttool.service.QuestionsService;
import com.xebia.assessmenttool.web.response.QuestionsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class QuestionsServiceImpl implements QuestionsService {

    @Autowired
    private QuestionsRepository questionsRepository;

    @Autowired
    private FrameworkRepository frameworkRepository;

    @Override
    public QuestionsResponse getAllQuestionsByFramework(List<String> framework) {
        List<Framework> frameworkList = frameworkRepository.findByFrameworkIn(framework);
        Set<Question> questionsList = questionsRepository.findByFrameworkListIn(frameworkList);
        return new QuestionsResponse(questionsList);
    }
}
