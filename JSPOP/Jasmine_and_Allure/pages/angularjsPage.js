var AngularjsPage = function() {
    var todoField = element(by.model('todoList.todoText'))
    var addButton = element(by.css('[value="add"]'));
    var todoList = element.all(by.repeater('todo in todoList.todos'));

    this.addNewTest = async function(){
      await todoField.sendKeys('write first protractor test');
      await addButton.click();
      await allureFunction.createStep('Add new test');
    };

    this.readElementFromToDoList = () => {
      return todoList;
    };

    this.clickElementFromToDoListAndGetCompleteAmount = async function (selectElement) {
      await todoList.get(selectElement).element(by.css('input')).click();
      await allureFunction.createStep('Click Element From To Do List And Get Complete Amount');
      return element.all(by.css('.done-true')).count();
    };
  };
  
module.exports = AngularjsPage;
  