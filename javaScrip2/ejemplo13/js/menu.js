class Menu {
  constructor() {
    this.botonContenedor = document.querySelector('#menu');
    this.estatus = document.querySelector('#estatus');
    this.buttons = [
      new Boton(this.botonContenedor, 'A'),
      new Boton(this.botonContenedor, 'B'),
      new Boton(this.botonContenedor, 'C')
    ];
  }
  mostrarBotonClick(nombreBoton){
    this.estatus.textContent = 'Clic en '+nombreBoton;
  }
}
