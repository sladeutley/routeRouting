'use strict';

console.log("hello");

angular.module("funWithRoutes", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/greeting.html",
            controller: "RoutesCtrl"
        })
        .when("/blueridgeparkway", {
            templateUrl: "partials/blueridgeparkway.html",
            controller: "BlueridgeParkwayCtrl"
        })
        .when("/route66", {
            templateUrl: "partials/route66.html",
            controller: "Route66Ctrl"
        })
        .otherwise('/');
});