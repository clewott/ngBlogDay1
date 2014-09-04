angular.module("main-modules.controllers")
.controller("homeController", function($scope, $location) {
  $scope.welcome = "Welcome to my Angular blog!  I hope you enjoy what you find here.";
  $scope.notFound = "Woops!  It likes like you tried to go to a page that does not exist.";
  $scope.goToBlog = function () {
    $location.path("/blog");
  };
});
