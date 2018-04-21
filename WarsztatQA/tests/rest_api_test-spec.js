const request = require('request');

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://angularjs.org');
  
      element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      element(by.css('[value="add"]')).click();
  
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write first protractor test');
  
      // You wrote your first test, cross it off the list
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).toEqual(2);
    });
});

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

    it('Put method', (done) => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        const form = {
            "id": 1, 
            "title": "foo", 
            "body": "bar", 
            "userId": 1
        };
        const returnBody = {
            "id": 1, 
            "title": "foo", 
            "body": 'bar', 
            userId: '1'
        };
        request.put({url:url, form: form}, function(err,httpResponse,body){ 
            expect(httpResponse.statusCode).toEqual(200);
            expect(JSON.parse(body)).toEqual(returnBody)
            done();
         });
    });

    it('Patch method', (done) => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        const form = {
            "title": "foo"
        };
        const returnBody = {
            "id": 1, 
            "title": "foo",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", 
            "userId": 1
        };
        request.patch({url:url, form: form}, function(err,httpResponse,body){ 
            expect(httpResponse.statusCode).toEqual(200);
            expect(JSON.parse(body)).toEqual(returnBody)
            done();
         });
    });

    it('Delete method', (done) => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        request.delete({url:url}, function(err,httpResponse,body){ 
            expect(httpResponse.statusCode).toEqual(200);
            done();
         });
    });
});