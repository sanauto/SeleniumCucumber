const { Given, When, Then } = require('cucumber');

Given('I am on the home page', async function() {
    
    this.page = this.pageFactory.create('common');
    await this.helper.loadPage(this.appUrl+this.page.url);

    this.page.focusIframe();
    
    this.page.agreeSkyCookies();

    this.page.focusDefaultContent();
});