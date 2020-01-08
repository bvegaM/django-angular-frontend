import { Component, OnInit } from '@angular/core';
import { Direccion } from '../dataservice/direccion';
import { dataService } from '../dataservice/data.services';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  direcciones : Direccion[]; 

  getDirecciones(): void{
    this.dataService.getDirecciones().then(direcciones => this.direcciones=direcciones);
  }

  deleteDireccion(dir): void{
    this.dataService.deleteDireccion(dir.id);
    this.direcciones = this.direcciones.filter(a =>a !== dir)
  }

  constructor(private dataService: dataService) { }

  ngOnInit() {
    this.getDirecciones();
    console.log(this.direcciones);
  }

}
