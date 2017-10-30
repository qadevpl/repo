var AngularjsPage = function() {
    var todoField = element(by.model('todoList.todoText'))
    var addButton = element(by.css('[value="add"]'));
    var todoList = element.all(by.repeater('todo in todoList.todos'));

    this.addNewTest = () => {
      return todoField.sendKeys('write first protractor test')
    	  .then(()=>addButton.click());
    };

    this.readElementFromToDoList = () => {
      return todoList;
    };

    this.clickElementFromToDoListAndGetCompleteAmount = (selectElement) => {
      return todoList.get(selectElement).element(by.css('input')).click()
        .then(()=>element.all(by.css('.done-true')).count());
    };
  };
  
module.exports = AngularjsPage;
  