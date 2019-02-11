var config = {
  apiKey: "AIzaSyDj1Ao1CQpZa0t5UO2V1LhgCM6kqE1xPcA",
  authDomain: "cacaoapp-f9f17.firebaseapp.com",
  databaseURL: "https://cacaoapp-f9f17.firebaseio.com",
  storageBucket: "cacaoapp-f9f17.appspot.com",
  messagingSenderId: "390201177541"
};

firebase.initializeApp(config);

var refGuerreros = firebase.database().ref('estudiantes');
refGuerreros.on('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {{}
    var value = childSnapshot.val();
    var node = document.createElement("li");    
    node.className = "warrior_item_list"; 

    var imagenlink = "assets/ocelote_icon.png"

    switch(value.grupo){
      case "Ocelote":
        imagenlink = "assets/ocelote_icon.png"
      break;
      case "Huitzilin":
        imagenlink = "assets/huitzilin_icon.png"
      break;
      case "Michin":
        imagenlink = "assets/michin_icon.png"
      break;
      case "Coate":
        imagenlink = "assets/coate_icon.png"
      break;
      case "Mazate":
        imagenlink = "assets/mazate_icon.png"
      break;
      case "Tlacuache":
        imagenlink = "assets/tlacuache_icon.png"
      break;
      case "Chapolin":
        imagenlink = "assets/chapolin_icon.png"
      break;
    }
    node.innerHTML = "<div>"+value.nombres+" "+value.apellidos+" ("+ value.grupo +") "+"</div><div><img width=50px src=\""+imagenlink+"\"></div>";
    document.getElementById("list_warriors").appendChild(node);
  });
});