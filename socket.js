module.exports = function(server) {
    var io = require('socket.io')(server);

    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });

    return io;
}
