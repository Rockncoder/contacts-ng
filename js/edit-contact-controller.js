(function () {
    "use strict";

    // getter form - gets the contacts app and chains to it
    angular.module("Contacts").
        controller("EditContactController", ["$scope", '$routeParams', 'ContactService', '$location',
            function ($scope, $routeParams, ContactService, $location) {

                var id = $routeParams.id;
                $scope.currentContact = ContactService.getContact(id);

                $scope.update = function () {
                    ContactService.updateContact(id, $scope.currentContact);
                    $location.path('/contacts');
                };

                $scope.clear = function(){
                    $scope.currentContact = {};
                };
            }]);
}());
