var app = angular.module('MagnetsApp', []);

app.controller('HomeController', function ($scope, socket) {
    $scope.magnets = [];

    socket.emit('getMagnets', { skip: 0, limit: 10 }, function (message) {
        $scope.magnets = message;
    });
});

app.controller('VisitsController', function ($scope, socket) {
    $scope.magnet = null;

    $scope.$watch('magnetId', function (id) {
        console.log(id);
        socket.emit('getVisits', { skip: 0, limit: 10, id: id }, function (message) {
            $scope.magnet = message;
        });
    });
});