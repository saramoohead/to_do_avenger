toDoAvenger.controller('toDoController', [function () {

    var self = this;

    self.addTask = function() {
        self.displayContent = {
            tasks: [
                {
                  "content": "learn to code Angular apps"
                },
            ]
        };
    };
}]);
