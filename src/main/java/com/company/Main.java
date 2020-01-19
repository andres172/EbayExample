package com.company;

import com.google.common.collect.Lists;
import org.testng.TestNG;

import java.io.File;
import java.util.List;

public class Main {


    public static void main(String[] args) throws Throwable {
	// write your code here

        String featurePath = new File(Main.class.getProtectionDomain().getCodeSource().getLocation()
                .toURI()).getParentFile().getParentFile().getPath();
        featurePath = featurePath +"/src/main/java/Features";

        String[] arguments = {"--plugin", "html:build/reports/cucumber", featurePath, "--glue", "Steps"};

        cucumber.api.cli.Main.main(arguments);

    }
}
