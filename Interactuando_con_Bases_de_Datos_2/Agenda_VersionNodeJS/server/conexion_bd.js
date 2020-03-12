const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost'
const nombreBD = 'AgendaJCS'

/**
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
**/


module.exports.usuarioPorLogin = function(login, callback) {
  console.log('Login = ' + login)

  var client = MongoClient.connect(url, function(err, client){
  	if (err){
  		console.log('ERROR-->', err);
  	}
  	else {
  		console.log('conexion ok');

      let db = client.db('AgendaJCS')
      let usuarios = db.collection('usuarios');

      usuarios.find({email: login}).toArray(function(err, docs){
        console.log('usuario ->', docs)
        client.close()

        callback(err, docs);
      })


  	}
  });
}
