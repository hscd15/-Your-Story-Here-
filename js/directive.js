app.directive("resize", function ($window) {
    return function (scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function () {
            return {
                'h': w[0].innerHeight,
                'w': w[0].innerWidth
            };
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.setArticle = function () {
                return {
                    'height': (newValue.h) + "px",
                };
            };

            scope.setSection = function () {
                return {
                    'height': (newValue.h * 0.80) + "px"
                }
            }

            scope.setAside = function () {
                return {
                    'height': (newValue.h * 0.20) + "px"
                }
            }

            scope.test = function () {
                if (this.buildings !== undefined) {
                    var numOfBuildings = this.buildings.length;
                    console.log(element[0].children.length)

                    return {
                        'width': (numOfBuildings * 300) + "px"
                    }
                } else {
                    return {
                        'width': "100%"
                    }
                }
            }
        }, true);

        w.bind("resize", function () {
            scope.$apply();
        });
    }
});