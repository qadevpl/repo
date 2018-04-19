const request = require('request');
'use strict';

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
            request.get(url, function (error, response) {
                expect(response.statusCode).toEqual(200);
                done();
           });
    });

    it('Post method', (done) => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const returnBody = {title: "foo",  id: 101};
        request.post({url:url, form: {title:'foo'}}, function(err,httpResponse,body){ 
            expect(httpResponse.statusCode).toEqual(201);
            expect(JSON.parse(body)).toEqual(returnBody)
            done();
         });
    });
});

//DONE:
//---debug mode (launch.json file)
//---jasmine
//---PhantomJS: https://github.com/angular/protractor/issues/150, https://github.com/webdriverio/webdriverio/issues/166
//java -jar selenium-server-standalone-2.41.0.jar
//jasmine report

//TODO:
//more api tests
//improve report
//sprawdzić czy działa najnowszy selenium_grid
//sprawdzić widoczność projektu w GITHUB


//run tests
//java -jar selenium-server-standalone-2.41.0.jar
//protractor conf.js (just only)