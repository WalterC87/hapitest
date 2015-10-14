var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({port:3000});

server.route({
	method: 'GET',
	path: '/',
	handler: function(req, reply){
		reply('Hello World!');
	}
})

server.route({
	method: 'GET',
	path: '/{number}',
	handler: function(req, reply){
		var numb = parseInt(req.params.number);
		if(isNaN(numb)){
			reply('por favor ingrese un numero no un texto');
		}else{
			if((numb%2) == 0){
				reply('Es un numero par');
			}else{
				reply('Es un numero impar');
			}	
		}
	}
})


server.start(function(){
	console.log('Server running at: ', server.info.uri);
});