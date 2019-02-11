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

    var node = document.createElement("li"); // Create a <li> node
    
    var textnodenames = document.createTextNode(value.nombres); // Create a text node
    var textnodespace = document.createTextNode(" "); // Create a text node
    var textnodelastnames = document.createTextNode(value.apellidos); // Create a text node
    
    var nombreGrupotxt = document.createTextNode(value.grupo); // Create a text node
    
    node.appendChild(textnodenames); // Append the text to <li>
    node.appendChild(textnodespace); // Append the text to <li>
    node.appendChild(textnodelastnames); // Append the text to <li>
    node.appendChild(textnodespace); // Append the text to <li>
    node.appendChild(document.createTextNode("[")); // Append the text to <li>
    node.appendChild(nombreGrupotxt); // Append the text to <li>
    node.appendChild(document.createTextNode("]")); // Append the text to <li>

    document.getElementById("list_warriors").appendChild(node); // Append <li> to <ul> with id="myList"
  });
});