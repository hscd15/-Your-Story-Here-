app.controller("homeStreetController", ["$scope", "gettEr", function ($scope, gettEr) {
    var storageName = "homeStreet";

        if (gettEr.localJson(storageName) === null) {
            promise = gettEr.serverJson('json', 'data');

            promise.then(function (payload) {
                var buildingsArray = payload.data.buildings[storageName];
                $scope.buildings = buildingsArray;
            })
        }
}])
    .controller("mainStreetController", ["$scope", "gettEr", function ($scope, gettEr) {
        var storageName = "mainStreet";

        if (gettEr.localJson(storageName) === null) {
            promise = gettEr.serverJson('json', 'data');

            promise.then(function (payload) {
                var buildingsArray = payload.data.buildings[storageName];
                $scope.buildings = buildingsArray;
            })
        }
}])