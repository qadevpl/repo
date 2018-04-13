const request = require('request');
const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/posts/?userId=5";

describe('test RestApi', () => {
    it('test for services', (done) => {
            request.get(jsonPlaceHolderURL, (err, res, body) => {  
            expect(res.statusCode).toBe(200);
            done();
           });
    });
});

//DONE:
//---debug mode (launch.json file)
//---jasmine
//---PhantomJS: https://github.com/angular/protractor/issues/150, https://github.com/webdriverio/webdriverio/issues/166
//java -jar selenium-server-standalone-2.41.0.jar
//todo: jasmine report

//TODO:
//more api tests
