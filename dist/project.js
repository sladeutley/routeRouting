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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BlueridgeParkwayCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData);
          $scope.routes = routesData.data.routes;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/Route66.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("Route66Ctrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData',routesData);
          $scope.routes = routesData.data.routes;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RoutesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("RoutesCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData for greetin',routesData);
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BlueridgeParkwayCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData);
          $scope.routes = routesData.data.highway1.name;
          $scope.routes = routesData.data.highway1.description;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/Route66.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("Route66Ctrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData',routesData);
          $scope.routes = routesData.data.routes;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RoutesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("RoutesCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData for greetin',routesData);
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BlueridgeParkwayCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData.data.highway1.name);
          $scope.routes = routesData.data.highway1.name;
          $scope.routes = routesData.data.highway1.description;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/Route66.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("Route66Ctrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData',routesData);
          $scope.routes = routesData.data.routes;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RoutesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("RoutesCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData for greetin',routesData);
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BlueridgeParkwayCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData.data.highway1.name);
          $scope.highway1Name = routesData.data.highway1.name;
          $scope.highway1Description = routesData.data.highway1.description;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/Route66.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("Route66Ctrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData',routesData);
          $scope.routes = routesData.data.routes;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RoutesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("RoutesCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData for greetin',routesData);
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BlueridgeParkwayCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData.data.highway1.name);
          $scope.highway1Name = routesData.data.highway1.name;
          $scope.highway1Description = routesData.data.highway1.description;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/Route66.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("Route66Ctrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData.data.highway1.name);
          $scope.highway2Name = routesData.data.highway2.name;
          $scope.highway2Description = routesData.data.highway2.description;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RoutesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("RoutesCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData for greetin',routesData);
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/BlueridgeParkwayCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("BlueridgeParkwayCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData.data.highway1.name);
          $scope.highway1Name = routesData.data.highway1.name;
          $scope.highway1Description = routesData.data.highway1.description;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/Route66.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("Route66Ctrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesDataforBlue',routesData.data.highway1.name);
          $scope.highway2Name = routesData.data.highway2.name;
          $scope.highway2Description = routesData.data.highway2.description;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/RoutesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("RoutesCtrl", function($scope, RoutesFactory) {
      RoutesFactory.getRoutes()
      .then( (routesData) => {
          console.log('routesData for greetin',routesData);
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


