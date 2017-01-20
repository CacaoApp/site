<<<<<<< HEAD
var imgChapolin;
var imgHuitzilin;
var imgOcelote;
var imgMichin;

/*
Coate
Tlacuache
Mazate
Michin*/

var xChapolin;
var yChapolin;
var xOcelote;
var yOcelote;
var xHuitzilin;
var yHuitzilin;
var xMichin;
var yMichin;

////////////////////
var puntosHuitzilin;
var puntosOcelote;
var puntosChapolin;
var puntosMichin;
var maximoPuntos;

////////////////////
var cacaosHuitzilin;
var cacaosOcelote;
var cacaosChapolin;
var maximoCacaos;

var wOcelote;
var hOcelote;
var wHuitzilin;
var hHuitzilin;
var wChapolin;
var hChapolin;
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
    imgChapolin = loadImage("assets/coate_icon.png");
    imgOcelote = loadImage("assets/tlacuache_icon.png");
    imgHuitzilin = loadImage("assets/mazate_icon.png"); 
    imgMichin = loadImage("assets/michin_icon.png"); 
}

function activarTextos(){
    //console.log("activando textos a true");
    textoActivado = 1;    
}

function activarImagenes(){
    imagenesActivado = 1;
}

function setup() {
    createCanvas(windowWidth, windowHeight);     
    imageMode(CENTER);   
    
    this.puntosHuitzilin = 0;
    this.puntosOcelote = 0;
    this.puntosChapolin = 0;
    this.maximoPuntos = 30000;
    
    this.wOcelote = imgOcelote.width;
    this.hOcelote = imgOcelote.height;
    this.wHuitzilin= imgHuitzilin.width;
    this.hHuitzilin = imgHuitzilin.height;
    this.wChapolin= imgChapolin.width;
    this.hChapolin = imgChapolin.height;  
    this.wMichin= imgMichin.width;
    this.hMichin = imgMichin.height;  
   
    setScale();
    setPositions();
}

function setPositions(){
    this.xChapolin = (windowWidth/5)*1;
    this.yChapolin = map(puntosChapolin, 0, maximoPuntos, windowHeight, 250*escala);
    this.xOcelote = (windowWidth/5)*2;
    this.yOcelote = map(puntosOcelote, 0, maximoPuntos, windowHeight, 250*escala);
    this.xHuitzilin = (windowWidth/5)*3;
    this.yHuitzilin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight, 250*escala);
    this.xMichin = (windowWidth/5)*4;
    this.yMichin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight, 250*escala);
}

function setScale(){
    this.escala = (windowHeight/imgOcelote.height);
    this.escala = map(escala, 1 , 20, 0.5, 1.5);    
}

function drawPodium(){
    strokeWeight(10);
    line(xOcelote-(wOcelote*escala)/2,yOcelote+(hOcelote*escala)/2,xOcelote+(wOcelote*escala)/2,yOcelote+(hOcelote*escala)/2);    
    line(xHuitzilin-(wHuitzilin*escala)/2,yHuitzilin+(hHuitzilin*escala)/2,xHuitzilin+(wHuitzilin*escala)/2,yHuitzilin+(hHuitzilin*escala)/2);    
    line(xChapolin-(wChapolin*escala)/2,yChapolin+(hChapolin*escala)/2,xChapolin+(wChapolin*escala)/2,yChapolin+(hChapolin*escala)/2);
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

/*
Coate
Tlacuache
Mazate
Michin*/

var refGruposOCelote = firebase.database().ref('grupos/Coate/cantidadPuntos');
refGruposOCelote.on('value', function(snapshot) {
    //console.log(snapshot.val());
    puntosOcelote = snapshot.val()
    setPositions();  
});

var refGruposHuitzilin = firebase.database().ref('grupos/Tlacuache/cantidadPuntos');
refGruposHuitzilin.on('value', function(snapshot) {
    //console.log(snapshot.val());
    puntosHuitzilin = snapshot.val()
    setPositions();  
});

var refGruposChapolín = firebase.database().ref('grupos/Mazate/cantidadPuntos');
refGruposChapolín.on('value', function(snapshot) {    
    //console.log(snapshot.val());
    puntosChapolin = snapshot.val()
    setPositions();  
});

var refGruposMichin = firebase.database().ref('grupos/Michín/cantidadPuntos');
refGruposMichin.on('value', function(snapshot) {    
    //console.log(snapshot.val());
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
    line(xChapolin,yChapolin,xChapolin,windowHeight);
    line(xHuitzilin,yHuitzilin,xHuitzilin,windowHeight);
    line(xOcelote,yOcelote,xOcelote,windowHeight);
    line(xMichin,yMichin,xMichin,windowHeight);    
    
    
    //drawPodium();    
    
    image(imgChapolin, xChapolin, yChapolin, wChapolin*escala, hChapolin*escala);
    image(imgHuitzilin, xHuitzilin, yHuitzilin, wHuitzilin*escala, hHuitzilin*escala);
    image(imgOcelote, xOcelote, yOcelote, wOcelote*escala, hOcelote*escala);    
    image(imgMichin, xMichin, yMichin, wMichin*escala, hMichin*escala);    
   
    drawTitle();
    
    drawScore();
    //windowWidth, windowHeight
   /* noFill();
    stroke("#CCC");
    strokeWeight(1);
    rect(windowWidth*0.9,0,windowWidth*0.1,windowHeight*0.1);*/
    
    //setScale();
    setPositions();  
    
}

function drawScore(){
     if(textoActivado == 1){
        textFont(font);
        fill(0).strokeWeight(0).textSize(15*escala);
        textAlign(CENTER);
         
        text("puntos\n"+puntosChapolin, xChapolin-wChapolin/2, yChapolin-hChapolin*1.5, wChapolin, hChapolin);
         
        text("puntos\n"+puntosOcelote, xOcelote-wOcelote/2, yOcelote-hOcelote*1.20, wOcelote, hOcelote);
         
        text("puntos\n"+puntosHuitzilin, xHuitzilin-wHuitzilin/2, yHuitzilin-hHuitzilin*1.70, wHuitzilin, hHuitzilin);
         
        text("puntos\n"+puntosMichin, xMichin-wMichin/2, yMichin-hMichin*2.5, wMichin, hMichin);  
         
        /* console.log("x"+xMichin);
         console.log("y"+yMichin);
         console.log("w"+wMichin);
         console.log("h"+hMichin);
         console.log("pta"+puntosMichin);*/
         
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
=======
var imgChapolin;
var imgHuitzilin;
var imgOcelote;
var imgMichin;

/*
Coate
Tlacuache
Mazate
Michin*/

var xChapolin;
var yChapolin;
var xOcelote;
var yOcelote;
var xHuitzilin;
var yHuitzilin;
var xMichin;
var yMichin;

////////////////////
var puntosHuitzilin;
var puntosOcelote;
var puntosChapolin;
var puntosMichin;
var maximoPuntos;

////////////////////
var cacaosHuitzilin;
var cacaosOcelote;
var cacaosChapolin;
var maximoCacaos;

var wOcelote;
var hOcelote;
var wHuitzilin;
var hHuitzilin;
var wChapolin;
var hChapolin;
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
    imgChapolin = loadImage("assets/coate_icon.png");
    imgOcelote = loadImage("assets/tlacuache_icon.png");
    imgHuitzilin = loadImage("assets/mazate_icon.png"); 
    imgMichin = loadImage("assets/michin_icon.png"); 
}

function activarTextos(){
    //console.log("activando textos a true");
    textoActivado = 1;    
}

function activarImagenes(){
    imagenesActivado = 1;
}

function setup() {
    createCanvas(windowWidth, windowHeight);     
    imageMode(CENTER);   
    
    this.puntosHuitzilin = 0;
    this.puntosOcelote = 0;
    this.puntosChapolin = 0;
    this.maximoPuntos = 30000;
    
    this.wOcelote = imgOcelote.width;
    this.hOcelote = imgOcelote.height;
    this.wHuitzilin= imgHuitzilin.width;
    this.hHuitzilin = imgHuitzilin.height;
    this.wChapolin= imgChapolin.width;
    this.hChapolin = imgChapolin.height;  
    this.wChapolin= imgMichin.width;
    this.hChapolin = imgMichin.height;  
   
    setScale();
    setPositions();
}

function setPositions(){
    this.xChapolin = (windowWidth/5)*1;
    this.yChapolin = map(puntosChapolin, 0, maximoPuntos, windowHeight, 250*escala);
    this.xOcelote = (windowWidth/5)*2;
    this.yOcelote = map(puntosOcelote, 0, maximoPuntos, windowHeight, 250*escala);
    this.xHuitzilin = (windowWidth/5)*3;
    this.yHuitzilin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight, 250*escala);
    this.xMichin = (windowWidth/5)*4;
    this.yMichin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight, 250*escala);
}

function setScale(){
    this.escala = (windowHeight/imgOcelote.height);
    this.escala = map(escala, 1 , 20, 0.5, 1.5);    
}

function drawPodium(){
    strokeWeight(10);
    line(xOcelote-(wOcelote*escala)/2,yOcelote+(hOcelote*escala)/2,xOcelote+(wOcelote*escala)/2,yOcelote+(hOcelote*escala)/2);    
    line(xHuitzilin-(wHuitzilin*escala)/2,yHuitzilin+(hHuitzilin*escala)/2,xHuitzilin+(wHuitzilin*escala)/2,yHuitzilin+(hHuitzilin*escala)/2);    
    line(xChapolin-(wChapolin*escala)/2,yChapolin+(hChapolin*escala)/2,xChapolin+(wChapolin*escala)/2,yChapolin+(hChapolin*escala)/2);
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

/*
Coate
Tlacuache
Mazate
Michin*/

var refGruposOCelote = firebase.database().ref('grupos/Coate/cantidadPuntos');
refGruposOCelote.on('value', function(snapshot) {
    //console.log(snapshot.val());
    puntosOcelote = snapshot.val()
    setPositions();  
});

var refGruposHuitzilin = firebase.database().ref('grupos/Tlacuache/cantidadPuntos');
refGruposHuitzilin.on('value', function(snapshot) {
    //console.log(snapshot.val());
    puntosHuitzilin = snapshot.val()
    setPositions();  
});

var refGruposChapolín = firebase.database().ref('grupos/Mazate/cantidadPuntos');
refGruposChapolín.on('value', function(snapshot) {    
    //console.log(snapshot.val());
    puntosChapolin = snapshot.val()
    setPositions();  
});

var refGruposMichin = firebase.database().ref('grupos/Michín/cantidadPuntos');
refGruposMichin.on('value', function(snapshot) {    
    //console.log(snapshot.val());
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
    line(xChapolin,yChapolin,xChapolin,windowHeight);
    line(xHuitzilin,yHuitzilin,xHuitzilin,windowHeight);
    line(xOcelote,yOcelote,xOcelote,windowHeight);
    line(xMichin,yMichin,xMichin,windowHeight);    
    
    //drawLevels();
    //drawPodium();    
    
    image(imgChapolin, xChapolin, yChapolin, wChapolin*escala, hChapolin*escala);
    image(imgHuitzilin, xHuitzilin, yHuitzilin, wHuitzilin*escala, hHuitzilin*escala);
    image(imgOcelote, xOcelote, yOcelote, wOcelote*escala, hOcelote*escala);    
    image(imgMichin, xMichin, yMichin, wMichin*escala, hMichin*escala);    
   
    drawTitle();
    //windowWidth, windowHeight
   /* noFill();
    stroke("#CCC");
    strokeWeight(1);
    rect(windowWidth*0.9,0,windowWidth*0.1,windowHeight*0.1);*/
    
    //setScale();
    setPositions();  
    
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
>>>>>>> 04e9a62a2692b161f1df44d3b2805bef7fa16e9a
