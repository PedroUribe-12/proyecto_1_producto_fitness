import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.css']
})
export class PaginaNoEncontradaComponent implements OnInit {

  public lista = new Array(7)

  public subtitulos = new Array(8)

  public style = ['--i:0.5','--i:1.5','--i:2.5','--i:2.25','--i:1.25', '--i:0.75', '--i:3','--i:0.35','--i:2.35']

  constructor() {

  }

  mousemove(){
    const position = document.documentElement;
        position.addEventListener("mousemove", e => {
                position.style.setProperty('--x', e.clientX + 'px');
        })
  }


  ngOnInit(): void {
    this.mousemove()
  }



}
