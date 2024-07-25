import { Component } from '@angular/core';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-fomomodal',
  templateUrl: './fomomodal.component.html',
  styleUrls: ['./fomomodal.component.css']
})
export class FomomodalComponent {

  constructor( public estadosService: EstadosService) { }


  show2: boolean = true;


  closeModal() {
    this.estadosService.showfomo = false;
    this.estadosService.fomomodal = false;
  }

  openModal() {
  
    this.estadosService.showfomo = !this.estadosService.showfomo;
    this.estadosService.fomomodal = !this.estadosService.fomomodal;
    
  }

}
