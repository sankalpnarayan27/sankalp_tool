package com.xebia.assessmenttool.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.ui.freemarker.FreeMarkerConfigurationFactoryBean;
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

@Component
public class WebConfig {
   @Bean
   @Primary
    public FreeMarkerConfigurationFactoryBean getFreeMarkerConfiguration() {
        FreeMarkerConfigurationFactoryBean bean = new FreeMarkerConfigurationFactoryBean();
        bean.setTemplateLoaderPath("classpath:emailtemplate");
        return bean;
    }

    @Bean
    public ITemplateResolver springThymeleafTemplateResolver() {
        SpringResourceTemplateResolver resolver = new SpringResourceTemplateResolver();
        resolver.setPrefix("classpath:/META-INF/resources/");
        resolver.setSuffix(".html");
        resolver.setOrder(1);
        resolver.setTemplateMode("LEGACYHTML5");
        resolver.setCacheable(false);
        return resolver;
    }
}


