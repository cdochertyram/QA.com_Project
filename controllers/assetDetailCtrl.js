var myApp;
(function (myApp) {
    var assetDetail;
    (function (assetDetail) {
        var ProductDetailCtrl = /** @class */ (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Asset Detail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailCtrl;
        }());
        module("productManagement")
            .controller("assetDetailCtrl", AssetDetailCtrl);
    })(assetDetail = myApp.assetDetail || (myApp.assetDetail = {}));
})(myApp || (myApp = {}));
