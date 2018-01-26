'use strict';

console.log("hello");

angular.module("funWithRoutes", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/guides.html",
            controller: "RoutesCtrl"
        })
        .otherwise('/');
});