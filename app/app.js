'use strict';

console.log("hello");

angular.module("funWithRoutes", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/routes.html",
            controller: "RoutesCtrl"
        })
        .otherwise('/');
});