const { Given, When, Then } = require('cucumber');
    
When('I navigate to ‘Deals’', async function () {
    this.page = this.pageFactory.create('shopdeals');
    await this.page.navigateToDeals();
});

Then('the user should be on the {string}', async function (dealsNavPage) {
    this.expect(this.appUrl+this.page.url).to.equal(dealsNavPage);
});

Given('I am on the {string} page', async function (dealsNavPage) {
    this.expect(this.appUrl+this.page.url).to.equal(dealsNavPage);
});

Then('I see a list of {string} deals with a price {string} to it', async function (dealName, price) {
    
    this.expect(await this.page.getDealPrice(dealName)).to.equal(price);
});