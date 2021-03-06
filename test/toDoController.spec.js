describe('toDoController', function() {
    beforeEach(module('ToDoAvenger'));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('toDoController');
    }));

    var tasks = [
      {
        "content": "learn to code Angular apps"
      },
    ];

    it('initialises with an empty list', function () {
        expect(ctrl.displayContent).toBeUndefined();
    });

    it('displays a task when it is added', function () {
        ctrl.addTask();
        expect(ctrl.displayContent.tasks).toEqual(tasks);
    });

    // shouldn't your addTask in your final test have an argument of content?

});
