
const Tarea = require('./Tarea');

class Tareas {
    _listado = {};
    get listadoArr() {
        const listado = [];
        obj.keys(this._id).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }
   
    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        
    }
}

module.exports = Tareas;
