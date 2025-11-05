export default class Cl_mInventario {
    dispositivos = [];
    agregarDispositivo({ articulo, callback, }) {
        const id = this.dispositivos.find((d) => d.id === articulo.id);
        if (id) {
            callback("El ID ya existe");
            return;
        }
        const serial = this.dispositivos.find((d) => d.serial === articulo.serial);
        if (serial) {
            callback("El serial ya existe");
            return;
        }
        this.dispositivos.push(articulo);
        callback(false);
    }
    listarDispositivos() {
        let dispositivos = [];
        this.dispositivos.forEach((d) => {
            dispositivos.push(d.toJSON());
        });
        return dispositivos;
    }
}
