import { Component, OnInit } from '@angular/core';
import { Persona } from '../dataservice/persona';
import { dataService } from '../dataservice/data.services';



@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[];

  getPersonas(): void{
    this.dataService.getPersonas().then(personas => this.personas=personas);
  }

  deletePersona(per): void{
    this.dataService.deletePersona(per.id);
    this.personas = this.personas.filter(a =>a !== per)
  }

  constructor(private dataService: dataService) { }

  ngOnInit() {
    this.getPersonas();
    console.log(this.personas);
  }

}
