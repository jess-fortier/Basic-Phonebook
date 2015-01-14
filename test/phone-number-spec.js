describe('phone number field validation', function() {
	beforeEach(function() {
		browser.get('http://jessfortier.com/tasters/phonebook')
	});



	it('rejects a phone number with too few digits', function() {
		element(by.binding('entryName')).sendKeys('valid username');

    // element(by.model('todoText')).sendKeys('write a protractor test');
    // element(by.css('[value="add"]')).click();

    // var todoList = element.all(by.repeater('todo in todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write a protractor test');
  });
});