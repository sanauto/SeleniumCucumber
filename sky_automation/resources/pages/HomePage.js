const CommonPage = require('./CommonPage');

class HomePage extends CommonPage {

  get elements() {
      return {
          signInButton: '[data-test-id=sign-in-link]',
          usernameInput: '[data-testid=AUTHN__INPUT]',
          submitButton: '[data-tracking-label=identifier--submit-button]',
          errorContainer: '[data-testid=ERROR__CONTAINER]',
          searchButton: '[data-test-id=masthead-search-toggle-button]',
          searchText: '[type=search]',
          editorialSection: '[data-test-id=editorial-section]'
      };
  }

  async skyLogin() {
    if(this.world.debug) console.log('Logging into sky');

    const signInButton = this.elements.signInButton;
    const signInElement = await this.world.helper.findElement(signInButton);
    this.world.helper.waitFor(signInButton);
    await signInElement.click();

    await this.focusIframe();
    
    const usernameInput = this.elements.usernameInput;
    const usernameElement = await this.world.helper.findElement(usernameInput);
    this.world.helper.waitFor(usernameElement);;
    await usernameElement.sendKeys(this.world.data.usercredentials.email);

    const submitButton = this.elements.submitButton;
    const submitElement = await this.world.helper.findElement(submitButton);
    this.world.helper.waitFor(submitElement);
    await submitElement.click();
  }
  
  async IsSignInErrorDisplayed() {
    if(this.world.debug) console.log('Verifying sign in error after invalid login');

    const errorContainer = this.elements.errorContainer;
    const errorContainerEle = await this.world.helper.findElement(errorContainer);
    this.world.helper.waitFor(errorContainerEle);;
    
    return (errorContainerEle.isDisplayed);
  }

  async searchSky() {
    if(this.world.debug) console.log('Performing search in the Sky web site');

    const searchButton = this.elements.searchButton;
    const searchButtonEle = await this.world.helper.findElement(searchButton);
    this.world.helper.waitFor(searchButtonEle);;
    await searchButtonEle.click();

    const searchText = this.elements.searchText;
    const searchTextEle = await this.world.helper.findElement(this.world.data.searchinformation.searchInput);
    this.world.helper.waitFor(searchTextEle);;
    await searchTextEle.sendKeys(searchText);
  }

  async IsEditorialSectionDisplayed() {
    if(this.world.debug) console.log('Verifying editorial section on Sky search');

    const editorialSection = this.elements.editorialSection;
    const editorialSectionEle = await this.world.helper.findElement(editorialSection);
    this.world.helper.waitFor(editorialSectionEle);;
    
    return (editorialSectionEle.isDisplayed);
  }

}

module.exports = HomePage;