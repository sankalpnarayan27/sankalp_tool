package com.xebia.assessmenttool.web.response;

import com.xebia.assessmenttool.entity.Framework;

import java.util.List;

public class FrameworkResponse {

    public List<Framework> framework;

    public List<Framework> getFramework() {
        return framework;
    }

    public void setFramework(List<Framework> framework) {
        this.framework = framework;
    }

    public FrameworkResponse(List<Framework> framework) {
        this.framework = framework;
    }
}
