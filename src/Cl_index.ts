import Cl_controlador from "./Cl_controlador.js";
import Cl_mInventario from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";

export default class Cl_index {
    public modelo: Cl_mInventario;
    public vista: Cl_vInventario;

    constructor() {
        this.modelo = new Cl_mInventario();
        this.vista = new Cl_vInventario();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
