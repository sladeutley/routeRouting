'use strict';

angular.module("funWithRoutes").controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
    RoutesFactory.getRoutes()
    .then( (routesData) => {
        console.log('routesData',routesData);
        $scope.routes = routesData.data.routes;
    });
});