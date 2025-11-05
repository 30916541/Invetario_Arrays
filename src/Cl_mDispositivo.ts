export interface iDispositivo {
    id: number;
    tipo: string;
    serial: string;
    marca: string;
    modelo: string | null;
}

export default class Cl_mDispositivo {
    private _id: number = 0;
    private _tipo: string = "";
    private _serial: string = "";
    private _marca: string = "";
    private _modelo: string | null = "";

    constructor({
        id,
        tipo,
        serial,
        marca,
        modelo,
    }: {
        id: number;
        tipo: string;
        serial: string;
        marca: string;
        modelo: string;
    }) {
        this._id = id;
        this._tipo = tipo;
        this._serial = serial;
        this._marca = marca;
        this._modelo = modelo;
    }

    set id(id: number) {
        this._id = +id;
    }
    
    get id(): number {
        return this._id;
    }

    set tipo(tipo: string) {
        this._tipo = tipo.trim().toLocaleUpperCase();
    }

    get tipo(): string {
        return this._tipo;
    }

    set serial(serial: string) {
        this._serial = serial.trim().toLocaleUpperCase();
    }

    get serial(): string {
        return this._serial;
    }

    set marca(marca: string) {
        this._marca = marca.trim().toLocaleUpperCase();
    }

    get marca(): string {
        return this._marca;
    }

    set modelo(modelo: string | null) {
        this._modelo = modelo ? modelo.trim().toLocaleUpperCase() : null;
    }

    get modelo(): string | null {
        return this._modelo;
    }

    toJSON(): iDispositivo {
        return {
            id: this.id,
            tipo: this.tipo,
            serial: this.serial,
            marca: this.marca,
            modelo: this.modelo,
        };
    }
}
