///////////////////////////////////////
var imgCoate;
var imgHuitzilin;
var imgMazate;
var imgMichin;
var imgOcelote;
var imgTlacuache;
////////////////////////////////////////
var xCoate;
var yCoate;
var xHuitzilin;
var yHuitzilin;
var xMazate = 0;
var yMazate = 0;
var xMichin = 0;
var yMichin = 0;
var xOcelote = 0;
var yOcelote = 0;
var xTlacuache = 0;
var yTlacuache = 0;
////////////////////////////////////////
var puntosCoate = 0;
var puntosHuitzilin = 0;
var puntosMazate = 0;
var puntosMichin = 0;
var puntosOcelote = 0;
var puntosTlacuache = 0;
////////////////////////////////////////
var maximoPuntos;
////////////////////////////////////////
var wCoate = 0
var hCoate = 0
var wHuitzilin = 0
var hHuitzilin = 0
var wMazate = 0
var hMazate = 0
var wMichin = 0
var hMichin = 0
var wOcelote = 0
var hOcelote = 0
var wTlacuache = 0
var hTlacuache = 0
////////////////////////////////////////
var escala;
var font;
////////////////////////////////////////
var textoActivado;
var imagenesActivado;
////////////////////////////////////////

let nTeams = 5;

var config = {
  apiKey: "AIzaSyDj1Ao1CQpZa0t5UO2V1LhgCM6kqE1xPcA",
  authDomain: "cacaoapp-f9f17.firebaseapp.com",
  databaseURL: "https://cacaoapp-f9f17.firebaseio.com",
  storageBucket: "cacaoapp-f9f17.appspot.com",
  messagingSenderId: "390201177541"
};

firebase.initializeApp(config);

function preload() {
  font = loadFont("assets/hurryup.ttf", activarTextos);
  imgCoate = loadImage("assets/team_icons/coate_icon.png");
  imgHuitzilin = loadImage("assets/team_icons/huitzilin_icon.png");
  imgMazate = loadImage("assets/team_icons/mazate_icon.png");
  imgMichin = loadImage("assets/team_icons/michin_icon.png");
  imgOcelote = loadImage("assets/team_icons/ocelote_icon.png");
  imgTlacuache = loadImage("assets/team_icons/tlacuache_icon.png");
}

function activarTextos() {
  textoActivado = 1;
}

function setup() {

  var cnv = createCanvas(windowWidth, windowHeight * 0.6);
  cnv.parent('sketch-holder');
  imageMode(CENTER);

  this.maximoPuntos = 50000;

  this.wCoate = imgCoate.width;
  this.hCoate = imgCoate.height;
  this.wHuitzilin = imgHuitzilin.width;
  this.hHuitzilin = imgHuitzilin.height;
  this.wMazate = imgMazate.width;
  this.hMazate = imgMazate.height;
  this.wMichin = imgMichin.width;
  this.hMichin = imgMichin.height;
  this.wOCelote = imgOcelote.width;
  this.hOcelote = imgOcelote.height;
  this.wTlacuache = imgTlacuache.width;
  this.hTlacuache = imgTlacuache.height;

  updateFromFirebase();
  setScale();
  updatePositions();
}

function updatePositions() {

  switch (nTeams) {
    case 4:
      this.xCoate = (windowWidth / nTeams) * 0.5;
      this.yCoate = map(puntosCoate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xHuitzilin = (windowWidth / nTeams) * 1.5;
      this.yHuitzilin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xMazate = (windowWidth / nTeams) * 2.5;
      this.yMazate = map(puntosMazate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xMichin = (windowWidth / nTeams) * 3.5;
      this.yMichin = map(puntosMichin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      break;

    case 5:
      this.xCoate = (windowWidth / nTeams) * 0.5;
      this.yCoate = map(puntosCoate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xHuitzilin = (windowWidth / nTeams) * 1.5;
      this.yHuitzilin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xMazate = (windowWidth / nTeams) * 2.5;
      this.yMazate = map(puntosMazate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xMichin = (windowWidth / nTeams) * 3.5;
      this.yMichin = map(puntosMichin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);      
      this.xTlacuache = (windowWidth / nTeams) * 4.5;
      this.yTlacuache = map(puntosMichin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      break;

    case 6:
      this.xCoate = (windowWidth / nTeams) * 0.5;
      this.yCoate = map(puntosCoate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xHuitzilin = (windowWidth / nTeams) * 1.5;
      this.yHuitzilin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xMazate = (windowWidth / nTeams) * 2.5;
      this.yMazate = map(puntosMazate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xMichin = (windowWidth / nTeams) * 3.5;
      this.yMichin = map(puntosMichin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);     
      this.xTlacuache = (windowWidth / nTeams) * 4.5;
      this.yTlacuache = map(puntosTlacuache, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      this.xOcelote = (windowWidth / nTeams) * 5.5;
      this.yOcelote = map(puntosOcelote, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
      break;
  }


}

function setScale() {
  this.escala = (windowHeight * 0.6 / imgMazate.height);
  this.escala = map(escala, 1, 20, 0.5, 1.5);
}

function drawScaleRanking() {
  for (var i = 50; i >= 0; i -= 10) {
    textFont(font);
    fill(0).strokeWeight(0).textSize(25 * escala);
    this.yval = map(i, 0, 50, windowHeight * 0.6, 250 * escala);
    text((i) + "K", 10 * escala, yval);
    stroke('#CCC');
    strokeWeight(1);
    line(60 * escala, yval, windowWidth, yval);
  }
}

function updateFromFirebase() {
  let refGruposCoate = firebase.database().ref('grupos/Coate/cantidadPuntos');
  refGruposCoate.on('value', function (snapshot) {
    puntosCoate = snapshot.val();
    updatePositions();
  });

  let refGruposHuitzilin = firebase.database().ref('grupos/Huitzilin/cantidadPuntos');
  refGruposHuitzilin.on('value', function (snapshot) {
    puntosHuitzilin = snapshot.val();
    updatePositions();
  });

  let refGruposMazate = firebase.database().ref('grupos/Mazate/cantidadPuntos');
  refGruposMazate.on('value', function (snapshot) {
    puntosMazate = snapshot.val();
    updatePositions();
  });

  let refGruposMichin = firebase.database().ref('grupos/Michin/cantidadPuntos');
  refGruposMichin.on('value', function (snapshot) {
    puntosMichin = snapshot.val();
    updatePositions();
  });

  let refGruposTlacuache = firebase.database().ref('grupos/Tlacuache/cantidadPuntos');
  refGruposTlacuache.on('value', function (snapshot) {
    puntosTlacuache = snapshot.val();
    updatePositions();
  });

  let refGruposOcelote = firebase.database().ref('grupos/Ocelote/cantidadPuntos');
  refGruposOcelote.on('value', function (snapshot) {
    puntosOcelote = snapshot.val();
    updatePositions();
  });

}

function draw() {
  background(255);
  drawScaleRanking();
  drawLines();
  drawIcons();
  drawScore();
  updatePositions();
}

function drawLines() {
  fill(255, 255, 255);
  stroke('#CCC');
  strokeWeight(10);
  line(xCoate, yCoate, xCoate, windowHeight * 0.6);
  line(xHuitzilin, yHuitzilin, xHuitzilin, windowHeight * 0.6);
  line(xMazate, yMazate, xMazate, windowHeight * 0.6);
  line(xMichin, yMichin, xMichin, windowHeight * 0.6);
  if (nTeams >= 5) {
    line(xTlacuache, yTlacuache, xTlacuache, windowHeight * 0.6);
  }
  if (nTeams > 5) {
    line(xOcelote, yOcelote, xOcelote, windowHeight * 0.6);
  }
}

function drawIcons() {
  image(imgCoate, xCoate, yCoate, wCoate * (escala), wCoate * (escala));
  image(imgHuitzilin, xHuitzilin, yHuitzilin, wHuitzilin * (escala), wHuitzilin * (escala));
  image(imgMazate, xMazate, yMazate, wMazate * (escala), wMazate * (escala));
  image(imgMichin, xMichin, yMichin, wMichin * (escala), wMichin * (escala));
  if (nTeams >= 5) {
    image(imgTlacuache, xTlacuache, yTlacuache, wTlacuache * (escala), wTlacuache * (escala));
  }
  if (nTeams > 5) {
    image(imgOcelote, xOcelote, yOcelote, wOcelote * (escala), wOcelote * (escala));
  }
}

function drawScore() {
  if (textoActivado == 1) {
    textFont(font);
    fill(0).strokeWeight(0).textSize(15 * escala);
    textAlign(CENTER);
    text("puntos\n\n" + puntosCoate, xCoate - wCoate / 2, yCoate - hCoate * 1.5, wCoate, hCoate);
    text("puntos\n\n" + puntosMazate, xMazate - wMazate / 2, yMazate - hMazate * 1.5, wMazate, hMazate);
    text("puntos\n\n" + puntosHuitzilin, xHuitzilin - wHuitzilin / 2, yHuitzilin - hHuitzilin * 1.5, wHuitzilin, hHuitzilin);
    text("puntos\n\n" + puntosMichin, xMichin - wMichin / 2, yMichin - hMichin * 1.5, wMichin, hMichin);
    if (nTeams >= 5) {
      text("puntos\n\n" + puntosTlacuache, xTlacuache - wTlacuache / 2, yTlacuache - hTlacuache * 1.5, wTlacuache, hTlacuache);      
    }
    if (nTeams > 5) {
      text("puntos\n\n" + puntosOcelote, xOcelote - wOcelote / 2, yOcelote - hOcelote * 1.5, wOcelote, hOcelote);
    }
    textAlign(LEFT);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.6);
  updatePositions();
  setScale();
}