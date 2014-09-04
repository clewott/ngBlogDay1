angular.module("main-modules.controllers")
.controller("homeController", function($scope, $location) {
  $scope.welcome = "Welcome to my Angular blog!  I hope you enjoy what you find here.";
  $scope.notFound = "Sorry, wrong place";
  $scope.goToBlog = function () {
    $location.path("/blog");
  };
});
