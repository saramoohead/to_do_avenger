toDoAvenger.controller('toDoController', [function () {

    var self = this;

    self.displayContent = {
        "tasks": [
            {
              "content": "learn to code Angular apps"
            },
        ]
    };

    self.addTask = function() {
        console.log("Yay app");
    };
}]);
