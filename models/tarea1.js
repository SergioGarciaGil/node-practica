
const {v4: uuidv4 } = require('uuid');
class Tarea1 {

    id = '';
    desc = '';
    completadoEn = null;
      
    constructor(desc) {
        this.id = uuidv4();
        this.desc =desc;
        this.completadoEn = null;
    }

}

module.exports = Tarea1;