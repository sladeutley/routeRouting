'use strict';

angular.module("funWithRoutes").controller("Route66Ctrl", function($scope, RoutesFactory) {
    RoutesFactory.getRoutes()
    .then( (routesData) => {
        console.log('routesDataforBlue',routesData.data.highway1.name);
        $scope.highway2Name = routesData.data.highway2.name;
        $scope.highway2Description = routesData.data.highway2.description;
    });
});