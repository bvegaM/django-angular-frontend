import { Component, OnInit } from '@angular/core';

import { Direccion} from './../../dataservice/direccion'
import { dataService} from './../../dataservice/data.services'
import { Router} from '@angular/router'

@Component({
  selector: 'app-direccion-add',
  templateUrl: './direccion-add.component.html',
  styleUrls: ['./direccion-add.component.css']
})
export class DireccionAddComponent implements OnInit {

  direccion = new Direccion();

  constructor(private dataService: dataService,
              private router: Router) { }

  createDireccion(): void{
    this.dataService.createDireccion(this.direccion)
    .then(
          () => this.redirect(),
          () => console.log("Error"),
         )
  }

  redirect(){
    this.router.navigate(['./direccion'])
  }

  ngOnInit() {
  }

}
