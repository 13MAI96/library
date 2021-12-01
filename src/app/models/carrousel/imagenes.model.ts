export class Imagen{
    url: string;
    descripcion: string;
    title: string;

    constructor(imagen: any){
        this.url = imagen.url || "";
        this.descripcion = imagen.descripcion || "";
        this.title = imagen.title || "";
    }
}