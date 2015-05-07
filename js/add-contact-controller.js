(function () {
    "use strict";

    angular.module("Contacts").
        controller("AddContactController", ["$scope", 'ContactService', '$location',
            function ($scope, ContactService, $location) {

                $scope.currentContact = {};

                $scope.add = function () {
                    ContactService.addContact($scope.currentContact);
                    $location.path('/contacts');
                };

                $scope.clear = function(){
                    $scope.currentContact = {};
                };
            }]);
}());
