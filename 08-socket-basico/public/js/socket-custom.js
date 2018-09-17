var socket = io();
socket.on('connect', function() {
    console.log(`Conectado al servidor`);
});

socket.on('disconnect', function() {
    console.log(`Perdimos conexion`);
});

socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});