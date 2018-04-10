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