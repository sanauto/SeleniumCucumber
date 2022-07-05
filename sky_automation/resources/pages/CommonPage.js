class CommonPage {

    constructor(world) {
        this.world = world;
    }
    
    get elements() {
        return {
            iFrame: '#sp_message_container_474555 > iframe',
            agreeButton: 'button[title="Agree"]'
        };
    }

    get url() {
        return '/';
    }

    async titleEquals(expectedTitle) {
        if(this.world.debug) console.log('Verifying the page title');

        const actualTitle = await this.world.driver.getTitle();
        this.world.expect(actualTitle).to.equal(expectedTitle);
    }

    async focusIframe() {
        if(this.world.debug) console.log('Focussing iframe object');

        const iFrameDocument  = this.elements.iFrame;
        await this.world.helper.waitFor(iFrameDocument);
        const iFrameElement = await this.world.helper.findElement(iFrameDocument);
        await this.world.helper.switchToIframe(iFrameElement);
        await this.world.sleep(500);
    }

    async focusDefaultContent() {
        if(this.world.debug) console.log('Focussing default content');

        await this.world.helper.switchToDefaultContent();
        await this.world.sleep(500);
    }

    async agreeSkyCookies() {
        if(this.world.debug) console.log('Handling cookies for sky website');

        const agreeButton = this.elements.agreeButton;
        await this.world.helper.waitFor(agreeButton);
        const agreeElement = await this.world.helper.findElement(agreeButton);
        await agreeElement.click();
        await this.world.sleep(500);
    }

}

module.exports = CommonPage;