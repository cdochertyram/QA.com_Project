var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "myController"
        })
    .when("/addAsset", {
        templateUrl: "views/addAsset.html",
        controller: "assetController"
    })
    .when("/assetList", {
        templateUrl: "views/assetList.html",
        controller: "assetController"
    })
    .when("/calculate", {
        templateUrl: "views/depreciation.html",
        controller: "assetController"
    })
    .when("/login", {
        templateUrl: "views/login.html",
        controller: "primaryController"
    })
    .when("/register", {
        templateUrl: "views/register.html",
        controller: "primaryController"
    })
    .when("/signIn", {
        templateUrl: "views/signin.html",
        controller: "primaryController"
    })
    .when("/resetpassword", {
        templateUrl: "views/passwordreset.html",
        controller: "primaryController"
    })
        .when("/assetDetail:productId", {
            templateUrl: "assets/assetDetailView.html",
            controller: "assetController"
        })

    //.otherwise("#/", {
    //    redirectTo: "views/home.html"
    //});
}]);

myApp.service('myService', function () {

    var search;

    var setData = function (entry) {
        search = entry;
    }

    var getData = function () {
        return search;
    }

    return {
        setData: setData,
        getData: getData
    };
});

//myApp.controller('primaryController', function ($scope) {
//    $scope.goToLogin = function () {
//        $location.path('/login');
//    };
//    $scope.register = function () {
//        $location.path('/login');
//    }
//});

myApp.controller('myController', ['$scope', '$rootScope', 'myService', function ($scope, $rootScope, myService) {

    $scope.setData = function () {
        myService.setData($scope.searchString);
        $rootScope.$broadcast('data_shared');
    };
    $scope.sortBy = "";
    $scope.searchStrict = false;
    $scope.searchString = "";
}]);

myApp.controller('assetController', ['$scope', 'myService', function ($scope, myService) {
    $scope.rowLimit = 2;
    $scope.showMoreRows = function (num) {
        $scope.rowLimit = num;
    };
    $scope.assets =
  [
    {
        title: 'Dell',
        date: new Date(2001, 06, 12),
        ddate: new Date(2005, 12, 18),
        purchaseValue: '120.00',
        residualValue: '40.00',
        years: '2',
    },
    {
        title: 'Dell Monitor',
        date: new Date(2014, 03, 08),
        ddate: new Date(2005, 12, 18),
        purchaseValue: '200.00',
        residualValue: '10.00',
        years: '7'
    },
    {
        title: 'HP Laptop',
        date: new Date(2017, 09, 28),
        ddate: new Date(2005, 12, 18),
        purchaseValue: '200.00',
        residualValue: '10.00',
        years: '3'
    }
  ];
    $scope.hide = false;
    $scope.sortBy = "";

    // service for searchString to become available in multiple controllers
    $scope.$on('data_shared', function () {
        $scope.searchString = myService.getData();
    });

    // To delete rows: select assets, click 'Remove' btn
    $scope.removeSelected = function () {
        $scope.assets = $scope.assets.filter(function (asset) {
            return !asset.selected
        })
    };

    $scope.addRow = function () {
        $scope.assets.push(
            {
                'title': $scope.title,
                'date': $scope.date,
                'ddate': $scope.ddate,
                'purchaseValue': $scope.purchaseValue,
                'residualValue': $scope.residualValue,
                'years': $scope.years
            });
        $scope.title = "";
        $scope.date = "";
        $scope.ddate = "";
        $scope.purchaseValue = "";
        $scope.residualValue = "";
        $scope.years = "";
    };
    $scope.calculateDepreciation = function () {

        console.log(($scope.purchaseCost - $scope.residualValue) / $scope.years);

    };

    $scope.calculateNBV = function () {
        alert($scope.purchaseValue - $scope.totalDepreciation);
    };
}]);
