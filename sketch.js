var imgCoate;
var imgTlacuache;
var imgMazate;
var imgMichin;
////////////////////

var xCoate;
var yCoate;
var xMazate;
var yMazate;
var xTlacuache;
var yTlacuache;
var xMichin;
var yMichin;

////////////////////
var puntosTlacuache;
var puntosMazate;
var puntosCoate;
var puntosMichin;
var maximoPuntos;

////////////////////
var cacaosTlacuache;
var cacaosMazate;
var cacaosCoate;
var maximoCacaos;

var wMazate;
var hMazate;
var wTlacuache;
var hTlacuache;
var wCoate;
var hCoate;
var wMichin;
var hMichin;

var escala;
var font;

var textoActivado;
var imagenesActivado;

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
    imgTlacuache = loadImage("assets/tlacuache_icon.png"); 
    imgMichin = loadImage("assets/michin_icon.png"); 
}

function activarTextos(){
    textoActivado = 1;    
}

function activarImagenes(){
    imagenesActivado = 1;
}

function setup() {
    createCanvas(windowWidth, windowHeight);     
    imageMode(CENTER);   
    
    this.puntosTlacuache = 0;
    this.puntosMazate = 0;
    this.puntosCoate = 0;
    this.maximoPuntos = 30000;
    
    this.wMazate = imgMazate.width;
    this.hMazate = imgMazate.height;
    this.wTlacuache= imgTlacuache.width;
    this.hTlacuache = imgTlacuache.height;
    this.wCoate= imgCoate.width;
    this.hCoate = imgCoate.height;  
    this.wMichin= imgMichin.width;
    this.hMichin = imgMichin.height;  
   
    setScale();
    setPositions();
}

function setPositions(){
    this.xCoate = (windowWidth/5)*1;
    this.yCoate = map(puntosCoate, 0, maximoPuntos, windowHeight, 250*escala);
    this.xMazate = (windowWidth/5)*2;
    this.yMazate = map(puntosMazate, 0, maximoPuntos, windowHeight, 250*escala);
    this.xTlacuache = (windowWidth/5)*3;
    this.yTlacuache = map(puntosTlacuache, 0, maximoPuntos, windowHeight, 250*escala);
    this.xMichin = (windowWidth/5)*4;
    this.yMichin = map(puntosMichin, 0, maximoPuntos, windowHeight, 250*escala);
}

function setScale(){
    this.escala = (windowHeight/imgMazate.height);
    this.escala = map(escala, 1 , 20, 0.5, 1.5);    
}

function drawPodium(){
    strokeWeight(10);
    line(xMazate-(wMazate*escala)/2,yMazate+(hMazate*escala)/2,xMazate+(wMazate*escala)/2,yMazate+(hMazate*escala)/2);        
    line(xTlacuache-(wTlacuache*escala)/2,yTlacuache+(hTlacuache*escala)/2,xTlacuache+(wTlacuache*escala)/2,yTlacuache+(hTlacuache*escala)/2);    
    line(xCoate-(wCoate*escala)/2,yCoate+(hCoate*escala)/2,xCoate+(wCoate*escala)/2,yCoate+(hCoate*escala)/2);
    line(xMichin-(wMichin*escala)/2,yMichin+(hMichin*escala)/2,xMichin+(wMichin*escala)/2,yMichin+(hMichin*escala)/2);
}

function drawScaleRanking(){
      for(var i = 30 ; i >= 0 ; i-=5 ){
        textFont(font);
        fill(0).strokeWeight(0).textSize(25*escala);
        this.yval = map(i, 0, 30, windowHeight, 250*escala);
        text((i)+"K" , 10*escala , yval);
        stroke('#CCC');
        strokeWeight(1);
        line(60*escala,yval,windowWidth,yval);
    }
}

var refGruposCoate = firebase.database().ref('grupos/Coate/cantidadPuntos');
refGruposCoate.on('value', function(snapshot) {    
    puntosCoate = snapshot.val()
    setPositions();  
});

var refGruposTlacuache = firebase.database().ref('grupos/Tlacuache/cantidadPuntos');
refGruposTlacuache.on('value', function(snapshot) {   
    puntosTlacuache = snapshot.val()
    setPositions();  
});

var refGruposMazate = firebase.database().ref('grupos/Mazate/cantidadPuntos');
refGruposMazate.on('value', function(snapshot) {    
    puntosMazate = snapshot.val()
    setPositions();  
});

var refGruposMichin = firebase.database().ref('grupos/Michín/cantidadPuntos');
refGruposMichin.on('value', function(snapshot) {    
    puntosMichin = snapshot.val()
    setPositions();  
});


function mousePressed(){
    //  writeNewPost("asdf5as4d63as5d4", "monk", "", "titulo", "body" )
    /*if(touchY>0&&touchY<windowHeight*0.2){
        console.log("lcik");
    }*/
}

function draw() {
    background(255);    
    drawScaleRanking();    
    fill(255,255,255);    
    stroke('#CCC');
    strokeWeight(10);    
    line(xCoate,yCoate,xCoate,windowHeight);
    line(xTlacuache,yTlacuache,xTlacuache,windowHeight);
    line(xMazate,yMazate,xMazate,windowHeight);
    line(xMichin,yMichin,xMichin,windowHeight);       
    //drawPodium();        
    image(imgCoate, xCoate, yCoate, wCoate*(escala/1.5), hCoate*(escala/1.5));
    image(imgTlacuache, xTlacuache, yTlacuache, wTlacuache*(escala/2), hTlacuache*(escala/2));
    image(imgMazate, xMazate, yMazate, wMazate*(escala/1.5), hMazate*(escala/1.5));    
    image(imgMichin, xMichin, yMichin, wMichin*(escala/1.5), hMichin*(escala/1.5));  
    drawTitle();
    drawScore();
    setPositions();  
    
}

function drawScore(){
     if(textoActivado == 1){
        textFont(font);
        fill(0).strokeWeight(0).textSize(15*escala);
        textAlign(CENTER);         
        text("puntos\n"+puntosCoate, xCoate-wCoate/2, yCoate-hCoate*1.8, wCoate, hCoate);         
        text("puntos\n"+puntosMazate, xMazate-wMazate/2, yMazate-hMazate*1.65, wMazate, hMazate);         
        text("puntos\n"+puntosTlacuache, xTlacuache-wTlacuache/2, yTlacuache-hTlacuache*1.5, wTlacuache, hTlacuache);         
        text("puntos\n"+puntosMichin, xMichin-wMichin/2, yMichin-hMichin*2.4, wMichin, hMichin);  
        textAlign(LEFT);
    }
}

function drawTitle(){
     if(textoActivado == 1){
        textFont(font);
        fill(0).strokeWeight(0).textSize(40*escala);
        textAlign(CENTER);
        text("CACAO APP\nPUNTAJE GENERAL", 0, 0, windowWidth, windowHeight*0.2);
        textAlign(LEFT);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setPositions();    
    setScale();
}