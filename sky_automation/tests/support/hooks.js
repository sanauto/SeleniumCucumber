const { BeforeAll, AfterAll } = require('cucumber');
const _ = require('lodash');

BeforeAll(async function () {
    console.log("Execute before all hook.");
});

AfterAll(async function () {
    console.log("Execute after all hook.");
});