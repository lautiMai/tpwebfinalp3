//Faustino Ugrina video explicativo: https://youtu.be/Mbuo3YCS0dM
//Lautaro Maidana 121133/6 video explicativo: https://youtu.be/TZvUINALADM
let objJuego;
let pantallaInicio;
let personajeImg; 
let obstaculoImg; 
let monedaImg;
let monedaSonido;
let crashSonido;
let boton;

function preload() {
  personajeImg = loadImage("data/Mcqueen.png"); 
  obstaculoImg = loadImage("data/obstaculo.png"); 
  monedaImg = loadImage("data/moneda.png");
  monedaSonido = loadSound('data/monedasonido.mp3');
  crashSonido = loadSound('data/crash.mp3');
  boton = loadSound('data/boton.mp3'); // Cargamos el sonido del botón
}

function setup() {
  createCanvas(640, 480);
  pantallaInicio = new PantallaInicio();
  objJuego = null;
}

function draw() {
  background(220);

  if (pantallaInicio.activa) {
    pantallaInicio.dibujar();
  } else {
    if (!objJuego) {
      objJuego = new Juego(3);
    }
    objJuego.dibujar();
  }
}

function mousePressed() {
  if (pantallaInicio.activa) {
    pantallaInicio.chequearBoton(mouseX, mouseY);
    boton.play();
  } else if (objJuego && (objJuego.juegoTerminado || objJuego.gano)) {
    objJuego.chequearBotonesFin(mouseX, mouseY);
    boton.play(); 
  }
}

function keyPressed() {
  if (objJuego && !pantallaInicio.activa) {
    objJuego.teclaPresionada(keyCode);
  }
}
