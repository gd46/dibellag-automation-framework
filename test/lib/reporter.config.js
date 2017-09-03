let reporter = require('cucumber-html-reporter');

let options = {
        theme: 'bootstrap',
        // jsonDir: 'test/output',
        jsonFile: 'test/output/results.json',
        output: 'test/output/report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"N/A",
            "Test Environment": "N/A",
            "Browser": "N/A",
            "Platform": "N/A",
            "Parallel": "N/A",
            "Executed": "N/A"
        }
    };

    reporter.generate(options);