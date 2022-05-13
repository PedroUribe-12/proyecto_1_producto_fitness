import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})

export class NavegadorComponent implements OnInit {

  public buscador:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarBuscador(){
    this.buscador = true;
  }

  ocultarBuscador(){
    this.buscador = false;
  }

}
