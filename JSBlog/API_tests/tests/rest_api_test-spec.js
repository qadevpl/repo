const request = require('request');

describe('test RestApi', () => {
  it('Get method', (done) => {
          const url = "https://jsonplaceholder.typicode.com/posts/?userId=5";
          const returnBody = {
              "userId": 5,
              "id": 44,
              "title": "optio dolor molestias sit",
              "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
          };
          request.get(url, function (err,httpResponse,body) {
              expect(httpResponse.statusCode).toEqual(200);
              expect(JSON.parse(body)).toContain(returnBody);
              done();
         });
  });

  it('Post method', (done) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const form = {
        "title": "foo", 
        "body": 'bar', 
        "userId": 1
    };
    const returnBody = {
        "title": "foo",  
        "id": 101, 
        "body": "bar", 
        "userId": "1"
    };
    request.post({url:url, form: form}, function(err,httpResponse,body){ 
        expect(httpResponse.statusCode).toEqual(201);
        expect(JSON.parse(body)).toEqual(returnBody)
        done();
     });
  });
});