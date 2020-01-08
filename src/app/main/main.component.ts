import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  routes: Object[] = [
    {
      title: 'Direcciones',
      route: '/direccion',
    },
    {
      title: 'Personas',
      route: '/persona',
    }
    ]
  
  constructor() { }

  ngOnInit() {
  }

}
