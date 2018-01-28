'use strict';

angular.module("funWithRoutes").controller("Route66Ctrl", function($scope, RoutesFactory) {
    RoutesFactory.getRoutes()
    .then( (routesData) => {
        console.log('routesData',routesData);
        $scope.routes = routesData.data.routes;
    });
});