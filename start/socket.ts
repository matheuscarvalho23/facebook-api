import Ws from 'App/Services/Ws';

Ws.start((socket) => {
    socket.on('passarinho', () => {
        console.log('opa');
    });
});
