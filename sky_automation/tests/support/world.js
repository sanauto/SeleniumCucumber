const {setWorldConstructor} = require('cucumber');
const selenium = require('selenium-webdriver');
const {expect, assert} = require('chai');
const _ = require('lodash');
const requireDir = require('require-dir');
const Promise = require('bluebird');
const Driver = require('./Driver');
const Helper = require('./Helper');
const PageFactory = require('../../resources/PageFactory');

require('dotenv').config();

class World {

    constructor({parameters}) {
        this.parameters = parameters;
        this.pf = process.env.PLATFORM || "chrome";
        this.timeout = parseInt(process.env.DEFAULT_TIMEOUT) || 60000;
        this.debug = (process.env.DEBUG == "true" ? true : false) || false;
        
        this.driver = Driver.create(this.pf).build();
        this.driver.manage().window().maximize();

        this.selenium = selenium;
        this.expect = expect;
        this.assert = assert;

        this.helper = new Helper(this);
        this.pageFactory = new PageFactory(this);
        this.data = requireDir('../../resources/data', { recurse: true });
    }
    
    get isBrowser() {
        return _.isFunction(this.driver.manage);
    }
    get platform() {
        return this.pf;
    }

    get environment() {
        return this.env;
    }

    get defaultTimeout(){
        return this.timeout;
    }

    get appUrl() {
        return this.helper.getAppUrl();
    }

    sleep(milliseconds){
        return Promise.delay(milliseconds);
    }
}

setWorldConstructor(World);