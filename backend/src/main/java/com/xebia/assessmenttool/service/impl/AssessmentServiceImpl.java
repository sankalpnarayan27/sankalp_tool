package com.xebia.assessmenttool.service.impl;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import com.xebia.assessmenttool.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xebia.assessmenttool.repository.FrameworkRepository;
import com.xebia.assessmenttool.repository.OrganisationRepository;
import com.xebia.assessmenttool.repository.AssessmentRepository;
import com.xebia.assessmenttool.repository.UserRepository;
import com.xebia.assessmenttool.security.entity.User;
import com.xebia.assessmenttool.security.provider.JwtTokenProvider;
import com.xebia.assessmenttool.service.AssessmentService;
import com.xebia.assessmenttool.web.request.CreateTestRequest;

@Service
@Transactional
public class AssessmentServiceImpl implements AssessmentService {

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private FrameworkRepository frameworkRepository;


    @Override
    public String saveorUpdate(CreateTestRequest createTestRequest, HttpServletRequest httpServletRequest) {
        Optional<Assessment> organisationTest = assessmentRepository.findById(createTestRequest.getId());
        if (organisationTest.isPresent()) {
            return updateQuestionforTest(createTestRequest, organisationTest.get());
        } else {
            Assessment organisationTest1 = new Assessment();
            String token = httpServletRequest.getHeader("AUTHORIZATION");
            String createdBy = getName(token);
            List<Framework> framework = frameworkRepository.findByFrameworkIn(createTestRequest.getFramework());
            Organisation organisation = getOrganisation(createTestRequest.getOrgId());
            Set<Framework> frameworkSet = new HashSet<Framework>(framework);
            organisationTest1.setFrameworkSet(frameworkSet);
            organisationTest1.setOrganisation(organisation);
            organisationTest1.setTestName(createTestRequest.getName());
            organisationTest1.setCreatedDate(LocalDateTime.now());
            organisationTest1.setCreatedBy(createdBy);
            organisationTest1.setStatus(createTestRequest.getFlag());
            List<DraftQuestion> draftQuestions = getDraftQuestions(createTestRequest.getDraftQuestions(), organisationTest1);
            getDraftFilter(draftQuestions);
            organisationTest1.setDraftQuestions(draftQuestions);
            assessmentRepository.save(organisationTest1);
            return "SUCCESS";
        }
    }

    @Override
    public Assessment getTest(Long organisationTestId) {
        return assessmentRepository.getOne(organisationTestId);
    }

    public void getDraftFilter(List<DraftQuestion> draftQuestions) {
        for (int i = 0; i < draftQuestions.size(); i++) {
            List<DraftFilters> draftFilters = draftQuestions.get(i).getDraftFiltersList();
            for (int j = 0; j < draftFilters.size(); j++) {
                draftFilters.get(j).setDraftQuestions(draftQuestions.get(i));
            }
        }
    }

    public List<DraftQuestion> getDraftQuestions(List<DraftQuestion> draftQuestions, Assessment assessment) {
        for (int i = 0; i < draftQuestions.size(); i++) {
            draftQuestions.get(i).setAssessment(assessment);
        }
        return draftQuestions;
    }

    public String getName(String token) {
        String email = jwtTokenProvider.getUsername(token);
        User user = userRepository.findByEmail(email);
        return user.getName();
    }

    public Organisation getOrganisation(long id) {
        return  organisationRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public Assessment findByTestCreatorName(String testCreatorName) {
        // TODO Auto-generated method stub
        return assessmentRepository.findByTestName(testCreatorName).orElseThrow(RuntimeException::new);

    }

    @Override
    public String updateQuestionforTest(CreateTestRequest createTestRequest, Assessment assessment) {
        for (int i = 0; i < assessment.getDraftQuestions().size(); i++) {
            DraftQuestion draftQuestions = assessment.getDraftQuestions().get(i);
            for (int j = 0; j < draftQuestions.getDraftFiltersList().size(); j++) {
                draftQuestions.getDraftFiltersList().get(j).setDraftFilterName(createTestRequest.getDraftQuestions()
                                                                                                .get(i)
                                                                                                .getDraftFiltersList()
                                                                                                .get(j)
                                                                                                .getDraftFilterName());
            }
        }
        assessment.setStatus(createTestRequest.getFlag());
        assessmentRepository.save(assessment);
        return "SUCCESS";
    }
}
