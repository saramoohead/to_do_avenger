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
      {
        "content": "get some sleep"
      }
    ];

    it('displays tasks', function() {
        expect(ctrl.displayContent.tasks).toEqual(tasks);
    });
});
