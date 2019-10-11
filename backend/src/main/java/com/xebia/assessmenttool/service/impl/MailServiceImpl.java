package com.xebia.assessmenttool.service.impl;

import com.xebia.assessmenttool.exception.EmailException;
import com.xebia.assessmenttool.service.MailService;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.annotation.PostConstruct;
import javax.mail.*;
import javax.mail.internet.*;
import java.util.Map;
import java.util.Properties;

@Service
public class MailServiceImpl implements MailService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MailServiceImpl.class);

    @Autowired
    private Configuration freemarkerConfig;

    private Session session;

    @Value("${email.mailPassword}")
    private String mailPassword;

    @Value("${email.mailHost}")
    private String mailHost;

    @Value("${email.mailSmtpAuth}")
    private String mailSmtpAuth;

    @Value("${email.mailSmtpStartTlsEnable}")
    private String mailSmtpStartTlsEnable;

    @Value("${email.emailFrom}")
    private String emailFrom;

    @Value("${email.mailPort}")
    private String mailPort;

    @PostConstruct
    public void init() {
        Properties props = new Properties();
        props.put("mail.smtp.auth", mailSmtpAuth);
        props.put("mail.smtp.starttls.enable", mailSmtpStartTlsEnable);
        props.put("mail.smtp.host", mailHost);
        props.put("mail.smtp.port", mailPort);
        this.session = Session.getInstance(props, new javax.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailFrom, mailPassword);
            }
        });
    }

    @Override
    public void sendMail(String type, Map<String, String> properties) {
        LOGGER.info("In SendMail method..");
        try {
            Message message = new MimeMessage(this.session);
            message.setFrom(new InternetAddress(emailFrom));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(properties.get("Email")));
            message.setSubject(getTemplateValue(type + "/subject.template", properties));
            MimeMultipart multipart = new MimeMultipart("related");
            BodyPart messageBodyPart = new MimeBodyPart();
            messageBodyPart.setContent(getTemplateValue(type + "/body.template", properties), "text/html");
            multipart.addBodyPart(messageBodyPart);
            message.setContent(multipart);
            Transport.send(message);
            LOGGER.info("Sent Mail Successfully");
        } catch (Exception e) {
            LOGGER.error("Excepton ", e);
            throw new EmailException("Email server issue");
        }
    }

    private String getTemplateValue(String template, Map<String, String> properties) throws Exception {
        LOGGER.info("Getting template: " + template);
        Template t = freemarkerConfig.getTemplate(template);
        return FreeMarkerTemplateUtils.processTemplateIntoString(t, properties);
    }
}
