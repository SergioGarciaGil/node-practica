require('colors');
const { inquirerMenu1,pausa } = require('./helpers/inquirer-practica');

const Tareas1 = require('./models/tareas');

const main  = async()=>{
let opt = '';

    do {
        /* opt = await inquirerMenu1();
        console.log({ opt }); */

        const tarea1 = new Tarea1('Comprar comida');
        const tareas1 = new Tareas1('uuuy');
        tareas1._listado[tarea1.id] = tarea1;
        console.log(tareas1);
       await pausa();
    }
    while (opt != '0');

}

main();