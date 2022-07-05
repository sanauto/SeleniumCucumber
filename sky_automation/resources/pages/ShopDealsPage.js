const CommonPage = require('./CommonPage');

class ShopDealsPage extends CommonPage {
    
    get url() {
        return '/deals';
    }

    get elements() {
        return {
            dealsLink: '//a[@data-test-id="nav-item-link"][contains(text(), "Deals',
            dealsFilter: '//div[@id="deals-filter',
            mobileDeals: '//button[contains(@class, "Button-sc") and text()="Mobile"]',
            iPhoneDeal: '//*[contains(@id,"deal-iphone-12-64gb")]',
            priceOffer: '//*[contains(@id,"price.offer")]',
            samsungDeal: '#deal-samsung-galaxy-s22',
            simOnlyDeal: '//*[contains(@id,"deal-sim-only-plan")]'
        };
    }

    async navigateToDeals() {
        if(this.world.debug) console.log('Navigating to deals page');

        const dealsLink = this.elements.dealsLink;
        await this.world.helper.waitFor(dealsLink);
        const dealsLinkEle = await this.world.helper.findElement(dealsLink);
        await dealsLinkEle.click();
        await this.world.sleep(2000);
    }

    async navigateToMobileDeals() {
        if(this.world.debug) console.log('Navigating to mobile deals');

        const dealsFilter = this.elements.dealsFilter;
        await this.world.helper.waitFor(dealsFilter);
        const dealsFilterEle = await this.world.helper.findElement(dealsFilter);

        const mobileDeals = this.elements.mobileDeals;
        const mobileDealsEle = await this.world.helper.findChildElement(dealsFilterEle, mobileDeals);
        await mobileDealsEle.click();
        await this.world.sleep(4000);
    }

    async getDealPrice(dealName) {
        if(this.world.debug) console.log('Verifying deal - ' + dealName);
    
        switch (dealName) {
            case 'iPhone':
                const iPhoneDeal = this.elements.iPhoneDeal;
                await this.world.helper.waitFor(iPhoneDeal);
                const iPhoneDealEle = await this.world.helper.findElement(iPhoneDeal);

                const priceOffer = this.elements.priceOffer;
                const priceOfferEle = await this.world.helper.findChildElement(iPhoneDealEle, priceOffer);
                
                return (await priceOfferEle.getText());
            case 'samsung':
                const samsungDeal = this.elements.samsungDeal;
                await this.world.helper.waitFor(samsungDeal);
                const samsungDealEle = await this.world.helper.findElement(samsungDeal);
        
                return (await samsungDealEle.getText());        
            default://simonly
                const simOnlyDeal = this.elements.simOnlyDeal;
                await this.world.helper.waitFor(simOnlyDeal);
                const simOnlyDealEle = await this.world.helper.findElement(simOnlyDealEle);
        
                return (await simOnlyDealEle.getText());
            }        
    }
}

module.exports = ShopDealsPage;