import { Component } from '@angular/core';
import * as L from 'leaflet';
import axios from 'axios';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  mensaje:any ='';

  mensaje2:any ='';

  objectmessage = {
    name:'',
    email:'',
    message:'',
   
  }

  cleanobject(){
    this.objectmessage = {
      name:'',
      email:'',
      message:'',
     
    }
  }

  objectsugge = {
    name:'',
    sugee:''
  
   
  }

  cleansugge(){
    this.objectsugge = {
      name:'',
      sugee:''
      
     
    }
  }


  ngAfterViewInit(): void {




      let element = document.getElementById('osm-map1');

      if (element) {
        // Height has to be set. You can do this in CSS too.
        element.style.height = '400px';
        
        // Create the map
      
        const map = L.map('osm-map1').setView([27.85851913339213, -82.32715974444365], 18);

        
        
        // Set up the OSM layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 30,
          attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([27.85851913339213, -82.32715974444365]).addTo(map);
      } else {
        console.error('Element with id "osm-map1" not found.');
      }


     


        // Where you want to render the map.
     
  }

  senmessage(){
    
        console.log(this.objectmessage);

        const emailPattern = /.+@.+\..+/;


        if(this.objectmessage.name===''){
          this.mensaje = 'Please write your name';
        }
        else if(!emailPattern.test(this.objectmessage.email)) {
          this.mensaje = 'Fix your email';
        } 
        else if(this.objectmessage.email===''){
          this.mensaje = 'Please write your email';
        }
        else if(this.objectmessage.message===''){
          this.mensaje = 'Please write your message';
        }
     


        else{
     
    

              this.mensaje="Sending data";
            
              axios.post(`https://rfmwebsite.com/forms/sendmail3.php`,JSON.stringify(this.objectmessage),{
                headers: { 
                  "Content-Type": "application/json"
                
                },
              }).then(success=>{
                  console.log("se ha enviado", success);
                  this.cleanobject();

                  this.mensaje= success.data.message;
              }).catch(error=>{
                  console.log(error);
                //this.notatuthmessage(error.response.status,error.response.data.mensaje);
              });

        }


  }

  sendsugge(){

    if(this.objectsugge.name===''){
      this.mensaje2 = 'Please write your name';
    }
    else if(this.objectsugge.sugee===''){
      this.mensaje2 = 'Please write your suggetion';
    }

    else{

          this.mensaje2="Sending data";
         

          axios.post(`https://rfmwebsite.com/forms/sendmail2.php`,JSON.stringify(this.objectsugge),{
            headers: { 
              "Content-Type": "application/json"
            
            },
          }).then(success=>{
              console.log("se ha enviado", success);
              this.cleansugge();
              this.mensaje2= success.data.message;
          }).catch(error=>{
              console.log(error);
            //this.notatuthmessage(error.response.status,error.response.data.mensaje);
          });


    }

  }



}
