'use strict';

angular.module("funWithRoutes").controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
    RoutesFactory.getRoutes()
    .then( (routesData) => {
        console.log('routesDataforBlue',routesData.data.highway1.name);
        $scope.highway1Name = routesData.data.highway1.name;
        $scope.highway1Description = routesData.data.highway1.description;
    });
});