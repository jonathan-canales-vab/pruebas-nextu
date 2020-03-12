const Router = require('express').Router(),
      ConexionBD = require('./conexion_bd.js')

Router.post('/login', function(req, res){
  console.log('REQ -->', req.body)
  ConexionBD.usuarioPorLogin(req.body.user, function(err, usuarios){
    console.log('usuario_2 ->', usuarios)
    let respuesta = ''
    if (err) {
      respuesta = 'Error: ' + err
    }
    else if (usuarios.length == 0) {
      respuesta = 'Usuario no válido'
    }
    else if ( req.body.pass != usuarios[0].clave) {
      respuesta = 'Clave no válida'
    }
    else {
      respuesta = 'Validado'

      req.session.login = usuarios[0]['email']
      req.session.usuarioId = usuarios[0]['_id']
    }
    console.log('session-->', req.session)
    console.log('respuesta -->', respuesta)
    res.send(respuesta)
  })
})

module.exports = Router
