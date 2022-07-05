require("chromedriver");
const {Builder, Browser, By, Key, until, WebDriver} = require('selenium-webdriver');
const { get } = require('selenium-webdriver/http');



  
    driver.wait(until.titleIs('Sky Glass - The New 4k TV From Sky | Sky Broadband, TV & Mobile | Sky.com'), 1000);

    console.log("URL is " + await driver.getCurrentUrl());
      
      await driver.get('https://www.sky.com/'); 

      var errMessage = false;
      try{
        let el4 = await driver.findElement(By.xpath('//h1[@data-testid="CREATE_PASSWORD__TITLE"][contains(text(), "Create your My Sky password")]'));
        await driver.wait(until.elementIsVisible(el4), 5000)
        await el3.click();
        console.log(await el3.isDisplayed)}
      
    await driver.quit();