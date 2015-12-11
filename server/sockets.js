module.exports.initialize = function (server, dataAccess) {
    var io = require('socket.io')(server);

    //Socket.io setup
    io.on('connection', function (socket) {
        //message: { skip: Number, limit: Number }
        socket.on('getMagnets', function (message, callback) {       
            dataAccess.getMagnets(message.skip, message.limit, callback);
        });

        //message: { skip: Number, limit: Number, id: String }
        socket.on('getVisits', function (message, callback) {       
            dataAccess.getVisits(message.skip, message.limit, message.id, callback);
        });
    });
};