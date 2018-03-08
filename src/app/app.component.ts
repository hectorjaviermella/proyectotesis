import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idproyecto : number;
  nombre : string;
  fecha: Date;
  descripcion: string;
  idtaxonomia: number;


  constructor(){
     this.idproyecto =1;
     this.nombre="proyecto1";
     this.fecha=null;
     this.descripcion="descripccion proyecto1"
     this.idtaxonomia=1;
  }
}
