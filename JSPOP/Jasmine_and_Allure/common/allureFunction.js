var AllureFunction = function() {
    //create step with attachment
    this.createStep = (name) => {
        allure.createStep(name, async() => {
            const res = await browser.takeScreenshot();
            allure.createAttachment(name, function() {
                return new Buffer(res,'base64')
            }, 'image/png')();
        })();
    }
};

module.exports = AllureFunction;