export class Carro {
    id!: number;
    marca!: string;
    modelo!: string;
    medida!: string;

    constructor(id:number, marca:string,modelo:string,medida:string){
        this.id=id;
        this.marca=marca;
        this.modelo=modelo;
        this.medida=medida;

    }
}
