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
      .when("/notFound",
      {
        templateUrl: "views/notFound.html",
        controller: "notFoundController"
      })
      .otherwise({
        redirectTo: "/notFound"
      });
  });
angular.module("main-modules.controllers", []);
