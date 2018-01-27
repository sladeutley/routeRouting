'use strict';

angular
  .module("funWithRoutes")
  .factory("RoutesFactory", function($q, $http) {
    let getRoutes = () => {
      return $q((resolve, reject) => {
        $http
          .get("../data/guides.json")
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
