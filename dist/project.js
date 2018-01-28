//====================================================================================================================
// Module:    funWithRoutes
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  console.log("hello");

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/routes.html",
              controller: "RoutesCtrl"
          })
          .otherwise('/');
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/highway1Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("RoutesCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData',routesData);
          $scope.routes = routesData.data.routes;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/routeFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
    .factory("RoutesFactory", function($q, $http) {
      let getRoutes = () => {
        return $q((resolve, reject) => {
          $http
            .get("../data/highways.json")
            .then(routes => {
              resolve(routes);
            })
            .catch(err => {
              reject(err);
            });
        });
      };

      return { getRoutes };
    });


}) (angular.module ('funWithRoutes', ['ngRoute']));


