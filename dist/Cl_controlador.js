import Cl_mDispositivo from "./Cl_mDispositivo.js";
export default class Cl_controlador {
    modelo;
    vista;
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarDispositivo({ dispositivoData, callback, }) {
        this.modelo.agregarDispositivo({
            articulo: new Cl_mDispositivo({
                ...dispositivoData,
                modelo: dispositivoData.modelo ?? "",
            }),
            callback: (error) => {
                callback(error);
            },
        });
    }
    listarDispositivos() {
        return this.modelo.listarDispositivos();
    }
}
