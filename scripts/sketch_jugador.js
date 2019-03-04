var config = {
  apiKey: "AIzaSyDj1Ao1CQpZa0t5UO2V1LhgCM6kqE1xPcA",
  authDomain: "cacaoapp-f9f17.firebaseapp.com",
  databaseURL: "https://cacaoapp-f9f17.firebaseio.com",
  storageBucket: "cacaoapp-f9f17.appspot.com",
  messagingSenderId: "390201177541"
};

firebase.initializeApp(config);

var url = new URL(window.location.href);
var identificador = url.searchParams.get("cid");
if (identificador === null) {
  console.log("URL ERROR");
} else {
  var refJugador = firebase.database().ref('estudiantes/' + identificador);
  var nodeNombres = document.getElementById("contenedor_nombre_usuario");
  var nodeApellidos = document.getElementById("contenedor_apellido_usuario");
  var nodePuntos = document.getElementById("contenedor_puntos_usuario_span");
  var nodeCacaos = document.getElementById("contenedor_cacaos_usuario_span");
  var nodeGrupo = document.getElementById("contenedor_equipo_usuario_span");
  refJugador.on('value', function (snapshot) {
    var value = snapshot.val();
    nodeNombres.innerText = value.nombres;
    nodeApellidos.innerText = value.apellidos;
    var refEquipoJugador = firebase.database().ref('grupos/' + value.grupo);
    refEquipoJugador.on('value', function (snapshotGrupo) {
      var valueGrupo = snapshotGrupo.val();
      nodePuntos.innerText = valueGrupo.cantidadPuntos;
      nodeCacaos.innerText = valueGrupo.cantidadCacaos;
      nodeGrupo.innerText = valueGrupo.nombre;
    });
  });
}