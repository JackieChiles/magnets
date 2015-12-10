var app = angular.module('MagnetsApp', []);

console.log('App created');

app.controller('MagnetsController', function ($scope, socket) {
    $scope.magnets = [];

    socket.emit('getMagnets', { skip: 0, limit: 10 }, function (message) {
        $scope.magnets = message;
    });
});