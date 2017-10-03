var myApp = angular.module('myApp', []);

var myController = function ($scope) {
    $scope.assets =
      [
        {
            title: 'Dell',
            date: new Date(2001, 06, 12),
            purchaseValue: '120.00',
            residualValue: '40.00',
            years: '2',
        },
        {
            title: 'Dell Monitor',
            date: new Date(2014, 03, 08),
            purchaseValue: '200.00',
            residualValue: '10.00',
            years: '7'
        },
        {
            title: 'HP Laptop',
            date: new Date(2017, 09, 28),
            purchaseValue: '200.00',
            residualValue: '10.00',
            years: '3'
        }
      ];

    $scope.showme = true;
    $scope.hide = false;
    $scope.rowLimit = 2;
    $scope.showMoreRows = function (num) {
        $scope.rowLimit = num;
    }
    $scope.sortBy = "";
    $scope.searchStrict = false;
    $scope.searchString = "";
}
myApp.controller("myController", myController);
