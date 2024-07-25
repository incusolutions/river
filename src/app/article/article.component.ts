import { Component } from '@angular/core';
import { EstadosService } from '../estados.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  constructor( public estadosService: EstadosService,public router: Router,private route: ActivatedRoute) { }


 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.estadosService.article = params['art'];
    });
  }


}
