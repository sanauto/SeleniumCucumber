const _ = require('lodash');

class Driver {
    constructor() {
        if( new.target == Driver ) {
          throw new Error("Driver can't be instantiated directly.")
        }
    }

    static create(name) {
        const fileName = './drivers/'+_.capitalize(name)+'Driver.js';

        try {
            const className = require(fileName);
            return new className();
        } 
        catch (error) {
            throw new Error(className+' driver not found');
        }
    }

    build() {}
}

module.exports = Driver;