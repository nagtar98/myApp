import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  standalone: true, 
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Soluciona el error NG8001 sin tocar módulos
})
export class GaleriaComponent implements OnInit {
  public tituloSeccion: string = 'Galería de Imágenes Dinámica';
  public rutaImagenLocal: string = 'assets/image1.png'; 

  constructor() {}
  ngOnInit() {}
}