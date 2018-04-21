const request = require('request');

describe('test RestApi DDT', () => {
    it('Get method', (done) => {
            const url = "https://jsonplaceholder.typicode.com/posts/?userId=5";
            let returnBody = require('../json/getMethod.json');

            request.get(url, function (err,httpResponse,body) {
                expect(httpResponse.statusCode).toEqual(200);
                expect(JSON.parse(body)).toContain(returnBody);
                done();
           });
    });

    it('Post method', (done) => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let jsonFile_return = require('../json/postMethod_return.json');
        let jsonFile_form = require('../json/postMethod_form.json');   

        //json file
        const form = jsonFile_form;
        const returnBody = jsonFile_return;
        
        request.post({url:url, form: form}, function(err,httpResponse,body){ 
            expect(httpResponse.statusCode).toEqual(201);
            expect(JSON.parse(body)).toEqual(returnBody);
            done();
         });
    });
});