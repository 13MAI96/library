import { Component, Input, OnInit } from '@angular/core';
import { CarrouselAnimations } from 'src/app/animations/carrousel/carrousel.animations';
import { Imagen } from 'src/app/models/carrousel/imagenes.model';

@Component({
  selector: 'app-img',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {
  @Input() imagen!: Imagen;
  @Input() clases!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
