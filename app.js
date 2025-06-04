import angular from "angular";

angular.module("monApp", [])
    .controller("MonController", function($scope) {
        $scope.nom = 'AngularJS';
})