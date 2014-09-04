angular.module("main-modules.controllers")
.controller("notFoundController", function($scope, $location) {
  $scope.notFound = "Whoops!  It likes like you tried to go to a page that does not exist.";
  $scope.goToBlog = function () {
    $location.path("/blog");
  };
  $scope.goToHome = function () {
    $location.path("/");
  };
});
