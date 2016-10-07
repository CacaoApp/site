var imgChapolin;
var imgHuitzilin;
var imgOcelote;

var xChapolin;
var yChapolin;
var xOcelote;
var yOcelote;
var xHuitzilin;
var yHuitzilin;

var puntosHuitzilin;
var puntosOcelote;
var puntosChapolin;

var maximoPuntos;

var wOcelote;
var hOcelote;
var wHuitzilin;
var hHuitzilin;
var wChapolin;
var hChapolin;

var escala;
var font;

var textoActivado;
var imagenesActivado;

function preload() {
    
    font = loadFont("assets/hurryup.ttf", activarTextos);
    
    imgChapolin = loadImage("assets/chapolin_icon.png");
    imgOcelote = loadImage("assets/ocelote_icon.png");
    imgHuitzilin = loadImage("assets/huitzilin_icon.png"); 
}

function activarTextos(){
    console.log("activando textos a true");
    textoActivado = 1;    
}

function activarImagenes(){
    imagenesActivado = 1;
}

function setup() {
    createCanvas(windowWidth, windowHeight);        
    imageMode(CENTER);   
    
   // this.textoActivado = 0;
    
    this.puntosHuitzilin = 3000;
    this.puntosOcelote = 30000;
    this.puntosChapolin = 15000;
    this.maximoPuntos = 30000;
    
    this.wOcelote = imgOcelote.width;
    this.hOcelote = imgOcelote.height;
    this.wHuitzilin= imgHuitzilin.width;
    this.hHuitzilin = imgHuitzilin.height;
    this.wChapolin= imgChapolin.width;
    this.hChapolin = imgChapolin.height;    
   
    setScale();
    setPositions();
}

function setPositions(){
    this.xChapolin = (windowWidth/4)*1;
    this.yChapolin = map(puntosChapolin, 0, maximoPuntos, windowHeight, 250*escala);
    this.xOcelote = (windowWidth/4)*2;
    this.yOcelote = map(puntosOcelote, 0, maximoPuntos, windowHeight, 250*escala);
    this.xHuitzilin = (windowWidth/4)*3;
    this.yHuitzilin = map(puntosHuitzilin, 0, maximoPuntos, windowHeight, 250*escala);
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

var refGruposOCelote = firebase.database().ref('grupos/Ocelote/cantidadPuntos');
refGruposOCelote.on('value', function(snapshot) {
    //console.log(snapshot.val());
    puntosOcelote = snapshot.val()
    setPositions();  
});

var refGruposHuitzilin = firebase.database().ref('grupos/Huitzilín/cantidadPuntos');
refGruposHuitzilin.on('value', function(snapshot) {
    //console.log(snapshot.val());
    puntosHuitzilin = snapshot.val()
    setPositions();  
});

var refGruposChapolín = firebase.database().ref('grupos/Chapolín/cantidadPuntos');
refGruposChapolín.on('value', function(snapshot) {    
    //console.log(snapshot.val());
    puntosChapolin = snapshot.val()
    setPositions();  
});


function mousePressed(){
  //  writeNewPost("asdf5as4d63as5d4", "monk", "", "titulo", "body" )
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
    // marcadores
   /* strokeWeight(2);
    line(0,yOcelote,xOcelote,yOcelote);
    line(0,yHuitzilin,xHuitzilin,yHuitzilin);
    line(0,yChapolin,xChapolin,yChapolin);    */
    //drawPodium();
    
    image(imgChapolin, xChapolin, yChapolin, wChapolin*escala, hChapolin*escala);
    image(imgHuitzilin, xHuitzilin, yHuitzilin, wHuitzilin*escala, hHuitzilin*escala);
    image(imgOcelote, xOcelote, yOcelote, wOcelote*escala, hOcelote*escala);    
    if(textoActivado == 1){
        textFont(font);
        fill(0).strokeWeight(0).textSize(40*escala);
        textAlign(CENTER);
        text("CACAO APP\nPUNTAJE GENERAL", 20, 20, windowWidth, windowHeight*0.2);
        textAlign(LEFT);
    }
    
  
   
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setPositions();    
    setScale();
}
