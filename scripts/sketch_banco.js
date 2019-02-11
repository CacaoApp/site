var imgCoate;
var imgHuitzilin;
var imgMazate;
var imgMichin;
////////////////////////////////////////
var xCoate;
var yCoate;
var xMazate;
var yMazate;
var xHuitzilin;
var yHuitzilin;
var xMichin;
var yMichin;
////////////////////////////////////////
var puntosHuitzilin;
var puntosMazate;
var puntosCoate;
var puntosMichin;
var maximoPuntos;
////////////////////////////////////////
var cacaosHuitzilin;
var cacaosMazate;
var cacaosCoate;
var maximoCacaos;
////////////////////////////////////////
var wMazate;
var hMazate;
var wHuitzilin;
var hHuitzilin;
var wCoate;
var hCoate;
var wMichin;
var hMichin;
////////////////////////////////////////
var escala;
var font;
////////////////////////////////////////
var textoActivado;
var imagenesActivado;
////////////////////////////////////////
var mazateVisible =  true;
var huitzilinVisible =  true;
var coateVisible =  true;
var michinVisible =  true;
////////////////////////////////////////////////////////////////

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
  imgCoate = loadImage("assets/coate_icon.png");
  imgMazate = loadImage("assets/mazate_icon.png");
  imgHuitzilin = loadImage("assets/huitzilin_icon.png");
  imgMichin = loadImage("assets/michin_icon.png");
}

function activarTextos() {
  textoActivado = 1;
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight * 0.6);
  cnv.parent('sketch-holder');
  imageMode(CENTER);
  this.maximoPuntos = 50000;
  this.wMazate = imgMazate.width;
  this.hMazate = imgMazate.height;
  this.wHuitzilin = imgHuitzilin.width;
  this.hHuitzilin = imgHuitzilin.height;
  this.wCoate = imgCoate.width;
  this.hCoate = imgCoate.height;
  this.wMichin = imgMichin.width;
  this.hMichin = imgMichin.height;
  setScale();
  updatePositions();
}

function updatePositions() {
  this.xCoate = (windowWidth / 5) * 1;
  this.yCoate = map(puntosCoate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
  this.xMazate = (windowWidth / 5) * 2;
  this.yMazate = map(puntosMazate, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
  this.xHuitzilin = (windowWidth / 5) * 3;
  this.yHuitzilin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
  this.xMichin = (windowWidth / 5) * 4;
  this.yMichin = map(puntosMichin, 0, maximoPuntos, windowHeight * 0.6, 250 * escala);
}

function setScale() {
  this.escala = (windowHeight * 0.6 / imgMazate.height);
  this.escala = map(escala, 1, 20, 0.5, 1.5);
}

function drawScaleRanking() {
  for (var i = 50; i >= 0; i -= 5) {
    textFont(font);
    fill(0).strokeWeight(0).textSize(25 * escala);
    this.yval = map(i, 0, 50, windowHeight * 0.6, 250 * escala);
    text((i) + "K-Cacaos", 10 * escala, yval);
    stroke('#CCC');
    strokeWeight(1);
    line(60 * escala, yval, windowWidth, yval);
  }
}

var refGruposCoate = firebase.database().ref('grupos/Coate/cantidadCacaos');
refGruposCoate.on('value', function (snapshot) {
  puntosCoate = snapshot.val()
  updatePositions();
});

var refGruposHuitzilin = firebase.database().ref('grupos/Huitzilin/cantidadCacaos');
refGruposHuitzilin.on('value', function (snapshot) {
  puntosHuitzilin = snapshot.val()
  updatePositions();
});

var refGruposMazate = firebase.database().ref('grupos/Mazate/cantidadCacaos');
refGruposMazate.on('value', function (snapshot) {
  puntosMazate = snapshot.val()
  updatePositions();
});

var refGruposMichin = firebase.database().ref('grupos/Michín/cantidadCacaos');
refGruposMichin.on('value', function (snapshot) {
  puntosMichin = snapshot.val()
  updatePositions();
});

function draw() {
  background(255);
  drawScaleRanking();
  drawLines();
  drawIcons();
  drawTitle();
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
}

function drawIcons(){
  image(imgCoate, xCoate, yCoate, wCoate * (escala / 1.5), hCoate * (escala / 1.5));
  image(imgHuitzilin, xHuitzilin, yHuitzilin, wHuitzilin * (escala / 2), hHuitzilin * (escala / 2));
  image(imgMazate, xMazate, yMazate, wMazate * (escala / 1.5), hMazate * (escala / 1.5));
  image(imgMichin, xMichin, yMichin, wMichin * (escala / 1.5), hMichin * (escala / 1.5));
}

function drawScore() {
  // simple update
  if (textoActivado == 1) {
    textFont(font);
    fill(0).strokeWeight(0).textSize(15 * escala);
    textAlign(CENTER);
    text("Cacaos\n\n$" + puntosCoate, xCoate - wCoate / 2, yCoate - hCoate * 1.8, wCoate, hCoate);
    text("Cacaos\n\n$" + puntosMazate, xMazate - wMazate / 2, yMazate - hMazate * 1.65, wMazate, hMazate);
    text("Cacaos\n\n$" + puntosHuitzilin, xHuitzilin - wHuitzilin / 2, yHuitzilin - hHuitzilin * 1.5, wHuitzilin, hHuitzilin);
    text("Cacaos\n\n$" + puntosMichin, xMichin - wMichin / 2, yMichin - hMichin * 2.4, wMichin, hMichin);
    textAlign(LEFT);
  }
}

function drawTitle() {
  if (textoActivado == 1) {
    textFont(font);
    fill(0).strokeWeight(0).textSize(40 * escala);
    textAlign(CENTER);
    text("BAN-K-CACAO", 0, 40, windowWidth, windowHeight * 0.6 * 0.2);
    textAlign(LEFT);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.6);
  updatePositions();
  setScale();
}