import { Component, OnInit } from '@angular/core';

import { ChatService } from "../providers/chat.service";


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  mensaje: string = "";
  elemento: any;

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes()
      .subscribe(() => {


        setTimeout(() => {
          this.elemento.scrolltop = this.elemento.scrollHeight;

        }, 20);

      });

  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length == 0) {
      return;
    }

    this._cs.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = "")
      .catch((err) => console.error("Error al enviar", err))
  }




}
