import { Component } from '@angular/core';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-sharemodal',
  templateUrl: './sharemodal.component.html',
  styleUrls: ['./sharemodal.component.css']
})
export class SharemodalComponent {


  constructor( public estadosService: EstadosService) { }
  show: boolean = false;
  numbertel: string = '';

  selectedCountry: string='';

    // angel stuff 
  
    url_tarjeta_principal: string = window.location.href;
    url_tarjeta_principal_uri: string = encodeURIComponent(this.url_tarjeta_principal);

    countries = [
      {nombre:'Afghanistan',codigo:93},
      {nombre:'Albania',codigo:355},
      {nombre:'Alemania',codigo:49},
      {nombre:'Algeria',codigo:213},
      {nombre:'Andorra',codigo:376},
      {nombre:'Angola',codigo:244},
      {nombre:'Anguilla',codigo:1000},
      {nombre:'Antárctica',codigo:672},
      {nombre:'Antigua',codigo:1001},
      {nombre:'Antillas Francesas',codigo:596},
      {nombre:'Antillas Holandesas',codigo:599},
      {nombre:'Arabia Saudita',codigo:966},
      {nombre:'Argentina',codigo:54},
      {nombre:'Armenia',codigo: 374},
      {nombre:'Aruba',codigo: 297},
      {nombre:'Australia',codigo: 61},
      {nombre:'Austria',codigo: 43},
      {nombre:'Azerbaiján',codigo:994},
      {nombre:'Bahamas',codigo:1002},
      {nombre:'Bahía de Guantanamo',codigo:539},
      {nombre:'Bahrain',codigo:973},
      {nombre:'Bangladesh',codigo:880},
      {nombre:'Barbados',codigo:1003},
      {nombre:'Belgica',codigo:32},
      {nombre:'Belice',codigo:501},
      {nombre:'Benin',codigo:229},
      {nombre:'Bermuda',codigo:1004},
      {nombre:'Bhutan',codigo:975},
      {nombre:'Bolivia',codigo:591},
      {nombre:'Bosnia y Herzegovina',codigo:387},
      {nombre:'Botswana',codigo:267},
      {nombre:'Brasil',codigo:55},
      {nombre:'Brunei',codigo:673},
      {nombre:'Bulgaria',codigo:359},
      {nombre:'Burkina Faso',codigo:226},
      {nombre:'Burma',codigo:95},
      {nombre:'Burundi',codigo:257},
      {nombre:'Cambodia',codigo:855},
      {nombre:'Camerún',codigo:237},
      {nombre:'Canada',codigo:1},
      {nombre:'Colombia',codigo:57},
      {nombre:'Comoros',codigo:269},
      {nombre:'Congo',codigo:242},
      {nombre:'Corea',codigo:82},
      {nombre:'Corea del Norte',codigo:850},
      {nombre:'Costa de Marfil',codigo:225},
      {nombre:'Costa Rica',codigo:506},
      {nombre:'Croacia',codigo:385},
      {nombre:'Cuba',codigo:53},
      {nombre:'Chad',codigo:235},
      {nombre:'Chile',codigo:56},
      {nombre:'China',codigo:86},
      {nombre:'Chipre',codigo:357},
      {nombre:'Diego Garcia',codigo:246},
      {nombre:'Dinamarca',codigo:45},
      {nombre:'Djibouti',codigo:253},
      {nombre:'Dominica',codigo:1007},
      {nombre:'Ecuador',codigo:593},
      {nombre:'Egipto',codigo:20},
      {nombre:'El Salvador',codigo:503},
      {nombre:'Emiratos Arabes Unidos',codigo:971},
      {nombre:'Eritea',codigo:291},
      {nombre:'Eslovaquia',codigo:421},
      {nombre:'España',codigo:34},
      {nombre:'Estados Unidos',codigo:1},
      {nombre:'Estonia',codigo:372},
      {nombre:'Etiopía',codigo:251},
      {nombre:'Filipinas',codigo:63},
      {nombre:'Finlandia',codigo:358},
      {nombre:'Francia',codigo:33},
      {nombre:'Gambia',codigo:220},
      {nombre:'Georgia',codigo:995},
      {nombre:'Ghana',codigo:233},
      {nombre:'Gibraltar',codigo:350},
      {nombre:'Granada',codigo:1009},
      {nombre:'Grecia',codigo:30},
      {nombre:'Groelandia',codigo:299},
      {nombre:'Guadalupe',codigo:590},
      {nombre:'Guam',codigo:1671},
      {nombre:'Guatemala',codigo:502},
      {nombre:'Guinea',codigo:224},
      {nombre:'Guinea-Bissau',codigo:245},
      {nombre:'Guinea Ecuatorial',codigo:240},
      {nombre:'Guyana',codigo:592},
      {nombre:'Guyana Francesa',codigo:594},
      {nombre:'Haití',codigo:509},
      {nombre:'Honduras',codigo:504},
      {nombre:'Hong Kong',codigo:852},
      {nombre:'Holanda',codigo:31},
      {nombre:'Hungría',codigo:36},
      {nombre:'India',codigo:91},
      {nombre:'Indonesia',codigo:62},
      {nombre:'Inglaterra / Reino Unido',codigo:44},
      {nombre:'Irán',codigo:98},
      {nombre:'Iraq',codigo:964},
      {nombre:'Irlanda',codigo:353},
      {nombre:'Isla Cabo Verde',codigo:238},
      {nombre:'Isla Navidad',codigo:6724},
      {nombre:'Isla Norforlk',codigo:6723},
      {nombre:'Isla Reunión',codigo:262},
      {nombre:'Islandía',codigo:354},
      {nombre:'Islas Ascención',codigo: 247},
      {nombre:'Islas Caimán',codigo:1006},
      {nombre:'Islas Cook',codigo:682},
      {nombre:'Islas Faroe',codigo:298},
      {nombre:'Islas Fiji',codigo:679},
      {nombre:'Islas Maldivas',codigo:960},
      {nombre:'Islas Malvinas',codigo:500},
      {nombre:'Islas Marshall',codigo:692},
      {nombre:'Islas Mauricio',codigo:230},
      {nombre:'Isla Mayotte',codigo:2696},
      {nombre:'Islas Salomón',codigo:677},
      {nombre:'Isla Seychelles',codigo:248},
      {nombre:'Islas Tonga',codigo:676},
      {nombre:'Islas Vírgenes Americanas',codigo:340},
      {nombre:'Islas Vírgenes Británicas',codigo:284},
      {nombre:'Israel',codigo:972},
      {nombre:'Italia',codigo:39},
      {nombre:'Jamaica',codigo:1010},
      {nombre:'Japón',codigo:81},
      {nombre:'Jordania',codigo:962},
      {nombre:'Kazakhstán',codigo:731},
      {nombre:'Kenia',codigo:254},
      {nombre:'Kiribati',codigo:686},
      {nombre:'Kuwait',codigo:965},
      {nombre:'Kyrgyzstán',codigo:733},
      {nombre:'Laos',codigo:856},
      {nombre:'Latvia',codigo:371},
      {nombre:'Lesoto',codigo:266},
      {nombre:'Líbano',codigo:961},
      {nombre:'Liberia',codigo:231},
      {nombre:'Libia',codigo:218},
      {nombre:'Liechtenstein',codigo:417},
      {nombre:'Lituania',codigo:370},
      {nombre:'Luxemburgo',codigo:352},
      {nombre:'Macao',codigo:853},
      {nombre:'Macedonia',codigo:389},
      {nombre:'Madagascar',codigo:261},
      {nombre:'Malasia',codigo:60},
      {nombre:'Malawi',codigo:265},
      {nombre:'Malta',codigo:356},
      {nombre:'Marruecos',codigo:212},
      {nombre:'Mauritania',codigo:222},
      {nombre:'México',codigo:52},
      {nombre:'Micronesia',codigo:691},
      {nombre:'Moldova',codigo:373},
      {nombre:'Mónaco',codigo:377},
      {nombre:'Mongolia',codigo:976},
      {nombre:'Montserrat',codigo:1011},
      {nombre:'Mozambique',codigo:258},
      {nombre:'Myanmar',codigo:95},
      {nombre:'Namibia',codigo:264},
      {nombre:'Nauru',codigo:674},
      {nombre:'Nepal',codigo:977},
      {nombre:'Nevis',codigo:1012},
      {nombre:'Nicaragua',codigo:505},
      {nombre:'Niger',codigo:227},
      {nombre:'Nigeria',codigo:234},
      {nombre:'Niue',codigo:683},
      {nombre:'Noruega',codigo:47},
      {nombre:'Nueva Caledonia',codigo:687},
      {nombre:'Nueva Zelanda',codigo:64},
      {nombre:'Oceano Atlántico Este',codigo: 871},
      {nombre:'Oceano Atlántico Oeste',codigo: 874},
      {nombre:'Oceano Indico',codigo:873},
      {nombre:'Oceano Pacífico',codigo:872},
      {nombre:'Omán',codigo:968},
      {nombre:'Pakistan',codigo:92},
      {nombre:'Palau',codigo:680},
      {nombre:'Panamá',codigo:507},
      {nombre:'Papua Nueva Guinea',codigo:675},
      {nombre:'Paraguay',codigo:595},
      {nombre:'Perú',codigo:51},
      {nombre:'Polonia',codigo:48},
      {nombre:'Portugal',codigo:351},
      {nombre:'Puerto Rico',codigo:1787},
      {nombre:'Qatar',codigo:974},
      {nombre:'República Central Africana',codigo:236},
      {nombre:'República Checa',codigo:42},
      {nombre:'República Dominicana',codigo:1008},
      {nombre:'República Gabona',codigo:241},
      {nombre:'República de Mali',codigo:223},
      {nombre:'República de Senegal',codigo:221},
      {nombre:'República de Vanuatú',codigo:7377},
      {nombre:'Rumanía',codigo:40},
      {nombre:'Russia',codigo:7},
      {nombre:'Rwanda',codigo:250},
      {nombre:'Saipán',codigo:1670},
      {nombre:'Samoa Americana',codigo:684},
      {nombre:'Samoa Oeste',codigo:685},
      {nombre:'San Croix',codigo:340},
      {nombre:'San John',codigo:340},
      {nombre:'San Kitts',codigo:1013},
      {nombre:'San Marino',codigo:378},
      {nombre:'San Thomas',codigo:340},
      {nombre:'San Vicente',codigo:1015},
      {nombre:'Santa Elena',codigo:290},
      {nombre:'Santa Lucia',codigo:1014},
      {nombre:'Santa Piera y Miquelón',codigo:508},
      {nombre:'Sao Tome',codigo:239},
      {nombre:'Sierra Leona',codigo:232},
      {nombre:'Singapur',codigo:65},
      {nombre:'Siria',codigo:963},
      {nombre:'Slovakia',codigo:421},
      {nombre:'Slovenia',codigo:386},
      {nombre:'Somalía',codigo:252},
      {nombre:'Sri Lanka',codigo:94},
      {nombre:'Sudáfrica',codigo:27},
      {nombre:'Sudán',codigo:249},
      {nombre:'Suecia',codigo:46},
      {nombre:'Suiza',codigo:41},
      {nombre:'Surinam',codigo:597},
      {nombre:'Swazilandia',codigo:268},
      {nombre:'Tahití / Polinesia Francesa',codigo:689},
      {nombre:'Tailandía',codigo:66},
      {nombre:'Taiwan',codigo:886},
      {nombre:'Tajikstan',codigo:73},
      {nombre:'Tanzania',codigo:255},
      {nombre:'Togo',codigo:228},
      {nombre:'Trinidad y Tobago',codigo:1016},
      {nombre:'Tunisia',codigo:216},
      {nombre:'Turquía',codigo:90},
      {nombre:'Turkmenistán',codigo:993},
      {nombre:'Tuvalú',codigo:688},
      {nombre:'Uganda',codigo:256},
      {nombre:'Ukrania',codigo:380},
      {nombre:'Uruguay',codigo:598},
      {nombre:'Uzbekistán',codigo:737},
      {nombre:'Vaticano',codigo:396},
      {nombre:'Venezuela',codigo:58},
      {nombre:'Vietnam',codigo:84},
      {nombre:'Wallis y Futuna',codigo:681},
      {nombre:'Yemen',codigo:967},
      {nombre:'Yugoslavia',codigo:381},
      {nombre:'Zaire',codigo:243},
      {nombre:'Zambia',codigo:260},
      {nombre:'Zimbabwe',codigo:263},
    ];
  
    listado_paises: Array<{codigo: number, nombre: string}> = [
    
      // Añade más países según sea necesario
    ];
    pais_por_defecto: number = 1;
    titulo_compartir: string = 'Riverview Fresh Market';
    descripcion_compartir: string = 'Riverview Fresh Market';
    imagen_compartir: string = 'https://riverviewfreshmarkets.mybcard.net/wp-content/uploads/2021/04/opengraph.jpg';
  


  closeModal() {
    this.show = false;
   // this.estadosService.showsharemodal = false;
  }

  openModal() {
  
    this.show = !this.show;
    //this.estadosService.showsharemodal = !this.estadosService.showsharemodal;
  }




  ngAfterViewInit(): void {
    // Asigna la URL al campo de texto
    const textoCopiar = document.getElementById('texto_copiar') as HTMLInputElement;
    if (textoCopiar) {
      textoCopiar.value = this.url_tarjeta_principal;
    }

    // Maneja los eventos de los botones de compartir
    this.addShareButtonListeners();
  }


  addShareButtonListeners(): void {
    document.getElementById('btn_share_whatsapp')?.addEventListener('click', (e) => {
      console.log("heyyyyyyyyyy");
      e.preventDefault();
      this.send_whatsapp_sms(1);
    });

    document.getElementById('btn_share_sms')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.send_whatsapp_sms(2);
    });

    this.addSocialShareListener('.compartir__facebook', `http://www.facebook.com/sharer/sharer.php?u=${this.url_tarjeta_principal_uri}&p[title]=${this.titulo_compartir}&p[summary]=${this.descripcion_compartir}&p[images][0]=${this.imagen_compartir}`);
    this.addSocialShareListener('.compartir__twitter', `http://twitter.com/home?status=${this.titulo_compartir.replace(' ', '+')}...++${this.url_tarjeta_principal_uri}+`);
    this.addSocialShareListener('.compartir__pinterest', `http://pinterest.com/pin/create/button/?url=${this.url_tarjeta_principal}&media=${this.imagen_compartir}&description=${this.titulo_compartir}`);
    this.addSocialShareListener('.compartir__linkedin', `https://www.linkedin.com/shareArticle?mini=true&url=${this.url_tarjeta_principal}&title=${this.titulo_compartir}&summary=${this.descripcion_compartir}&source=`);
    this.addSocialShareListener('.compartir__mensaje', `mailto:?subject=${this.titulo_compartir}&body=${this.descripcion_compartir} ${this.url_tarjeta_principal}`);
    this.addSocialShareListener('.compartir__telegram', `tg://msg?text=${this.titulo_compartir}&body=${this.descripcion_compartir} ${this.url_tarjeta_principal}`);
  }

  addSocialShareListener(selector: string, url: string): void {
    document.querySelector(selector)?.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(url, '_blank');
    });
  }

  send_whatsapp_sms(tipo: number): void {
  

            var url_share="";
            var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
            var numero_celular_share=this.numbertel;
            
            numero_celular_share=numero_celular_share.trim();
            numero_celular_share=numero_celular_share.replace(/ /g,"");


            if(tipo==1){
                  url_share="";            			
                  if(numero_celular_share!=""){
                         

                    url_share=`https://api.whatsapp.com/send?phone=${this.selectedCountry}${numero_celular_share}&text=${this.titulo_compartir} - ${this.url_tarjeta_principal}`;
                  }
                  else{
                    url_share=`https://api.whatsapp.com/send?text=${this.titulo_compartir} - ${this.url_tarjeta_principal}`;
                  }
            }
            else{
                url_share="";
                if(iOS){
                    url_share="sms:"+numero_celular_share+"&body="+this.titulo_compartir+" - "+this.url_tarjeta_principal;
                }else{
                    url_share="sms://"+numero_celular_share+"?body="+this.titulo_compartir+" - "+this.url_tarjeta_principal;
                }
            }
            window.open(url_share,"_blank");



  }


}
