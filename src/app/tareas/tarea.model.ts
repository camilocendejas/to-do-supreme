export class Tarea{
    public nombre: string;
    public detalle: string;
    public fecha: string;
    public hora: string;

    constructor(nombre: string, detalle: string, fecha: string, hora: string){
        this.nombre = nombre;
        this.detalle = detalle;
        this.fecha = fecha;
        this.hora = hora
    }
}