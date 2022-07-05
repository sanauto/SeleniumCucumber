const _ = require('lodash');

class Helper {

    constructor(world) {
        this.world = world;
    }

    getWorld() {
        return this.world;
    }

    getDriver() {
        return this.world.driver;
    }

    getAppUrl() {
        return "https://www.sky.com";
    }

    async waitFor(locator, waitInSeconds) {

        const timeout = (waitInSeconds) ? (waitInSeconds * 1000) : this.world.defaultTimeout;

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log('waitFor: '+locator);

        await this.world.driver.wait(this.world.selenium.until.elementLocated(this.world.selenium.By[selector](locator)), timeout);
    }

    async loadPage(url) {
        if(this.world.debug) console.log('Loading page: '+url);
        await this.world.driver.get(url);
    }

    async findElement(locator) {

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log('findElement: '+locator);

        return this.world.driver.findElement(this.world.selenium.By[selector](locator));
    }

    async findChildElement(parentElement, locator) {

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log('findElement: '+locator);

        return parentElement.findElement(this.world.selenium.By[selector](locator));
    }
    
    async switchToIframe(iFrameElement) {
        if(this.world.debug) console.log('Switching to default content');

        await this.world.driver.switchTo().frame(iFrameElement);
    }

    async switchToDefaultContent() {
        if(this.world.debug) console.log('Switching to default content');

        await this.world.driver.switchTo().defaultContent();
    }
}


module.exports = Helper;