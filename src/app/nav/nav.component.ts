import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor( public estadosService: EstadosService) { }

  navestilo:string = "";
  
  changemodalstates(){
    this.estadosService.fomomodal =true;
    this.estadosService.showfomo=true;
  }

}
