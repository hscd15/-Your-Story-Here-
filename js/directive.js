app.directive("resize", function ($window, $state) {
    return function (scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function () {
            return {
                'h': w[0].innerHeight || w[0].documentElement.clientHeight || w[0].body.clientHeight,
                'w': w[0].innerWidth || w[0].documentElement.clientWidth || w[0].body.clientWidth
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

            scope.buildingsWidth = function () {
                if (this.buildings !== undefined) {
                    var numOfBuildings = this.buildings.length;

                    return {
                        'width': ((numOfBuildings * 300) + (numOfBuildings * 20)) + "px"
                    }
                } else {
                    return {
                        'width': "100%"
                    }
                }
            }

            scope.key = function ($event) {
                var currentState = $state.current.name;

                switch ($event.keyCode) {
                case 38:
                    alert("up arrow");
                    break;
                case 39:
                    moveStreet("right")
                    break;
                case 40:
                    alert("down arrow");
                    break;
                case 37:
                    moveStreet("left");
                    break;
                case 13:
                    alert('Stop hitting return :p');
                    break;
                }

                function moveStreet(direction) {
                    switch (currentState) {
                    case "mainStreet":
                        var buildings = document.getElementById("buildings"),
                            angularElement = angular.element(buildings),
                            position = angularElement.prop('offsetLeft'),
                            positionInt = 0;

                        if (direction === "right") {
                            positionInt = parseInt(position) - 10;
                        } else {
                            positionInt = parseInt(position) + 10;
                        }

                        angularElement.css({
                            'left': '' + positionInt + 'px',
                            '-webkit-transition': 'all 20ms cubic-bezier(0.55, 0.085, 0.68, 0.53)',
                            '-moz-transition': 'all 20ms cubic-bezier(0.55, 0.085, 0.68, 0.53)',
                            '-ms-transition': 'all 20ms cubic-bezier(0.55, 0.085, 0.68, 0.53)',
                            '-o-transition': 'all 20ms cubic-bezier(0.55, 0.085, 0.68, 0.53)',
                            'transition': 'all 2ms cubic-bezier(0.55, 0.085, 0.68, 0.53)'
                        });
                        break;
                    }
                    console.log(currentState)
                }
            }
        }, true);

        w.bind("resize", function () {
            scope.$apply();
        });
    }
});