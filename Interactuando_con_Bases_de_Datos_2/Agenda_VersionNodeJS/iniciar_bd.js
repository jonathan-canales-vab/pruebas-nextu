var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost';

var client = MongoClient.connect(url, function(err, client){
	if (err){
		console.log('ERROR-->', err);
	}
	else {
		console.log('conexion ok');

    let db = client.db('AgendaJCS')
    let usuarios = db.collection('usuarios');

    usuarios.deleteMany({}, (error, result) => {
      console.log('Resultado de eliminar usuarios', result.deletedCount);
    });

    usuarios.insertMany([
      {nombre: 'Jonathan', email:'jonathan.canales@vab.cl', clave: '123456'},
      {nombre: 'Marcelo', email:'marcelo@vab.cl', clave: '123456'},
      {nombre: 'Claudia', email:'claudia@vab.cl', clave: '123456'}
    ], (error, result) => {
      console.log('Resultado de insert', result.toString());
    });

    client.close()
	}
});
