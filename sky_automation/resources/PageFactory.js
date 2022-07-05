const _ = require('lodash');

class PageFactory {
    
    constructor(world) {
        this.world = world;
    }

    create(name) {
        const fileName = './pages/'+_.upperFirst(_.camelCase(name))+'Page.js';

        try {
            const className = require(fileName);
            return new className(this.world);
        } 
        catch (error) {
            throw new Error(className+' page not found');
        }
    }
}

module.exports = PageFactory;