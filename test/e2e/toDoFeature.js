describe('To Do Avenger', function () {
    var taskBox = element(by.model('toDoCtrl.taskContent'));
    var addButton = element(by.className('addbtn'));

    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('has a title', function () {
        expect(browser.getTitle()).toEqual('To Do Avenger');
    });

    it('adds user\'s task content into task list', function () {
        taskBox.sendKeys('Sleep');
        addButton.click();

        var tasks = element.all(by.repeater('task in toDoCtrl.displayContent'));

        expect(tasks.last().getText()).toEqual('Sleep');
    });

});
