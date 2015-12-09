module.exports.initialize = function (server, dataAccess) {
    var io = require('socket.io')(server);

    //Socket.io setup
    io.on('connection', function (socket) {
        //message: { skip: Number, take: Number }
        socket.on('getMagnets', function (message, callback) {       
            callback(dataAccess.getMagnets(message));
        });
    });
};