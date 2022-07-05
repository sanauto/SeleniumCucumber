const { Given, When, Then } = require('cucumber');

When('I try to sign in with invalid credentials', async function () {
    this.page = this.pageFactory.create('home');
    await this.page.skyLogin();
});
 
Then('I should see a box with the text "Create your My Sky password"', async function () {

    await this.page.IsSignInErrorDisplayed()

});     

When('I search "sky" in the search bar', async function () {

    await this.page.searchSky();;
});

Then('I should see an editorial section.', async function () {
    await this.page.IsEditorialSectionDisplayed();
});

AfterAll (async function() {
    this.driver.close();
});
