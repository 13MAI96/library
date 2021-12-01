import { Component, OnInit } from '@angular/core';
import { CarrouselAnimations } from 'src/app/animations/carrousel/carrousel.animations';
import { Imagen } from 'src/app/models/carrousel/imagenes.model';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  imagenes: Imagen[] = [];
  position: number = 1;
  prevPosition: number = 0;
  nextPosition: number = 2;
  clases: string[] = [' transitionOut', ' transitionIn', ' notVisible', ''];
  prevImagenClass: string = 'notVisible';
  actualImagenClass: string = '';
  isFocused: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.imagenes.push(new Imagen({url: '/assets/img1.png', descripcion: '...', title: "azul"}));
    this.imagenes.push(new Imagen({url: '/assets/img2.png', descripcion: '...', title: "verde"}));
    this.imagenes.push(new Imagen({url: '/assets/img3.png', descripcion: '...', title: "rojo"}));
    this.imagenes.push(new Imagen({url: '/assets/img4.png', descripcion: '...', title: "amarillo"}));
    this.imagenes.push(new Imagen({url: '/assets/img5.png', descripcion: '...', title: "celeste"}));
    this.imagenes.push(new Imagen({url: '/assets/img6.png', descripcion: '...', title: "violeta"}));
    this.imagenes.push(new Imagen({url: '/assets/img7.png', descripcion: '...', title: "naranja"}));
    this.imagenes.push(new Imagen({url: '/assets/img8.png', descripcion: '...', title: "blanco"}));
    this.imagenes.push(new Imagen({url: '/assets/img9.png', descripcion: '...', title: "negro"}));
    setInterval(()=>{this.next()}, 10000);
  }

  prev(){
    this.nextPosition = this.position;
    this.position = this.prevPosition;
    this.prevPosition -= 1;
    if(this.prevPosition < 0){
      this.prevPosition = this.imagenes.length - 1;
    }
    console.log(this.prevPosition, this.position, this.nextPosition)
    return;
  }

  next(){
    setTimeout(() => {
      this.actualImagenClass = this.clases[3];
      this.prevImagenClass = this.clases[2];
    }, 5000)
    this.prevPosition = this.position;
    this.position = this.nextPosition;
    this.prevImagenClass = this.clases[0];
    this.actualImagenClass = this.clases[1];
    this.nextPosition += 1;
    if(this.nextPosition >= this.imagenes.length){
      this.nextPosition = 0;
    }
    console.log(this.prevPosition, this.position, this.nextPosition)
    return;
  }

  selectView(idImg: number){
    this.position = idImg;
    if(idImg == 0){
      this.prevPosition = this.imagenes.length - 1;
      this.nextPosition = idImg + 1;
    }
    else if(idImg == this.imagenes.length - 1){
      this.prevPosition = idImg - 1;
      this.nextPosition = 0;
    }
    else{
      this.prevPosition = idImg - 1;
      this.nextPosition = idImg + 1;
    }
    console.log(this.prevPosition, this.position, this.nextPosition)
    return;
  }

}
