import { Component, OnInit } from '@angular/core';

import { Persona} from './../../dataservice/persona'
import { Direccion } from './../../dataservice/direccion';
import { dataService} from './../../dataservice/data.services'
import { Router} from '@angular/router'

@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.component.html',
  styleUrls: ['./persona-add.component.css']
})
export class PersonaAddComponent implements OnInit {

  persona = new Persona();
  sexo: Object[] =[
    {valor:'M',descripcion:'masculino'},
    {valor:'F',descripcion:'femenino'}
  ]
  direcciones : Direccion[]; 

  constructor(private dataService: dataService,
              private router: Router) { }

  createPersona(): void{
    this.dataService.createPersona(this.persona)
    .then(
          () => this.redirect(),
          () => console.log("Error"),
         )
  }

  listaDirecciones(): void{
    this.dataService.getDirecciones().then(direcciones => this.direcciones=direcciones);
  }

  redirect(){
    this.router.navigate(['./persona'])
  }


  ngOnInit() {
    this.listaDirecciones();
  }

}
