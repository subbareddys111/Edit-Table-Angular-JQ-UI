var demo = angular.module("demo", []);

demo.controller("Ctrl",

function Ctrl($scope) {
    $scope.model = {
        contacts: [{
            id: 1,
            name: "Robert",
            age: 28,
            gender: "male",
            country: "America"
        }, {
            id: 2,
            name: "William",
            age: 24,
            gender: "male",
            country: "Australia"
        },{
            id: 3,
            name: "Linda",
            age: 32,
            gender: "female",
            country: "India"
        },{
            id: 4,
            name: "Maria",
            age: 32,
            gender: "female",
            country: "Brazil"
        }, {
            id: 5,
            name: "Nancy",
            age: 32,
            gender: "female",
            country: "India"
        },{
            id: 6,
            name: "Thomas",
            age: 32,
            gender: "male",
            country: "America"
        }, {
            id: 7,
            name: "Richard",
            age: 40,
            gender: "male",
            country: "Australia"
        }],
        selected: {}
    };

    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (contact) {
        if (contact.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (contact) {
        $scope.model.selected = angular.copy(contact);
    };

    $scope.saveContact = function (idx) {
        console.log("Saving contact");
        $scope.model.contacts[idx] = angular.copy($scope.model.selected);
        $scope.reset();
    };

    $scope.reset = function () {
        $scope.model.selected = {};
    };
});