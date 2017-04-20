app.factory('genObj', function (gettEr, settEr) {
        return {
            ifEmpty: function ($scope, storageName) {
                if (gettEr.localJson(storageName) === null) {
                    var promise = gettEr.serverJson('ajax', 'savedLists');

                    promise.then(function (payload) {
                        settEr.toLocal(storageName, payload, 'fromServer');
                    })
                } else {
                    $scope.buildings = gettEr.localJson(storageName);
                }
            }
        };
    })
    //getterObjects
    .factory('gettEr', function ($http, $window) {
        return {
            serverJson: function (fileLocation, fileName) {
                return $http.get(fileLocation + '/' + fileName + '.json')
            },
            localJson: function (storageName) {
                jsonInfo = $window.localStorage && $window.localStorage.getItem(storageName);
                return angular.fromJson(jsonInfo);
            }
        };
    })
    //setterObjects
    .factory('settEr', function ($window, gettEr) {
        return {
            toLocal: function (storageName, val, infoOrigin) {
                var newVal;
                switch (infoOrigin) {
                case "fromUser":
                    toLocal = gettEr.localJson(storageName);
                    newVal = toLocal.concat(val);
                    break;
                case "fromDelete":
                    newVal = val;
                    break;
                case "fromServer":
                    newVal = val.data[storageName];
                    break;
                }
                toJson = angular.toJson(newVal);
                return $window.localStorage && $window.localStorage.setItem(storageName, toJson);
            },
            toServer: function (fileLocation, fileName, listId) {
                return $http.post('../multiView/' + fileLocation + '/' + fileName + '.json');
            }
        };
    })
    //removeObjects
    .factory('removEr', function ($window, genObj, gettEr, settEr) {
        return {
            deleteItem: function ($index, storageName) {

                localJson = gettEr.localJson(storageName);
                val = localJson.splice($index, 1);

                $window.localStorage && $window.localStorage.removeItem(storageName);

                settEr.toLocal(storageName, localJson, "fromDelete");
            }
        }
    });