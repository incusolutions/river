import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class EstadosService {

  constructor() { }


  article:string = "platains";
  fomomodal:boolean = false;
  showfomo:boolean = false;

  showsharemodal:boolean = false;



  

  openModalshare(){
   // this.callGlobalFunction();
    this.showsharemodal = true;
  }


  callGlobalFunction(): void {
    if (typeof window.inicial === 'function') {
      window.inicial();
    } else {
      console.error('Function myGlobalFunction is not defined.');
    }
  }

  closeModalshare() {
    this.showsharemodal = false;
   // this.estadosService.showsharemodal = false;
  }




 

}
