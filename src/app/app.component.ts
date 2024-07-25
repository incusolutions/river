import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { EstadosService } from './estados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'riverviewfreshmarket';
  constructor( public estadosService: EstadosService) { }



}
