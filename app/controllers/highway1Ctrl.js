'use strict';

angular.module("funWithRoutes").controller("RoutesCtrl", function($scope, RoutesFactory) {
    RoutesFactory.getRoutes()
    .then( (routesData) => {
        console.log('routesData',routesData);
        $scope.routes = routesData.data.routes;
    });
});