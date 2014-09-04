angular.module("main-modules", ["main-modules.controllers","ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/",
      {
        templateUrl: "views/home.html",
        controller: "homeController"
      })
      .when("/blog", {
        templateUrl: "views/post.html",
        controller: "postsController"
      })
      .when("/edit", {
        templateUrl: "views/edit.html",
        controller: "editController"
      })
      .when("/notFound",
      {
        templateUrl: "views/notFound.html",
        controller: "homeController"
      })
      .otherwise({
        redirectTo: "/notFound"
      });
  });
angular.module("main-modules.controllers", []);
