

/*  */
class Tareas1 {
    _listado = {};

    constructor() {
        this._listado = {};
    }
   
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas1;
