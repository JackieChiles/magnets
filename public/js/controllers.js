var app = angular.module('MagnetsApp', []);

app.controller('HomeController', function ($scope, socket) {
    $scope.magnets = [];

    socket.emit('getMagnets', { skip: 0, limit: 10 }, function (message) {
        $scope.magnets = message;
    });
});

app.controller('VisitsController', function ($scope, socket) {
    $scope.visits = [];

    console.log($scope.magnetId);
});