angular.module("main-modules.controllers")
.controller("postsController", function($scope, $location) {
  $scope.title = "You made it to the posts which means part of my site is working! So, time for a drink.";

  $scope.posts = [];

  $scope.addPost = function (post) {
    $scope.posts.push({
      title:post.title,
      content:post.content,
      date:new Date()
    });
    console.log(post);
    $scope.newPost = '';
  };

  $scope.removePost = function (post) {
    $scope.posts.splice($scope.posts.indexOf(post), 1);
    console.log("Task is deleted!");
  };

  $scope.goToHome = function () {
    $location.path("/");
  };
  $scope.goToEdit = function () {
    $location.path("/edit")
  };
});
