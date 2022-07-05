const Driver = require("../Driver");
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');

class ChromeDriver extends Driver {

    constructor() {
        super();
    }

    build() {
        return new webdriver.Builder()
                .withCapabilities({
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    chromeOptions: {
                        args: ['start-maximized', '--incognito']
                },
                path: chromedriver.path
                }).build();
    }
}

module.exports = ChromeDriver;