

require('colors');
const { inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
//const { mostrarMenu,pausa } = require('./helpers/inquirer-practica');

const Tareas = require('./models/tareas');



const main = async () => {
    console.log(
        'Hola mundo');
    
    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                console.log(desc)
                break;
            case '2':
                console.log(tareas._listado);
        }
        
     

    
        await pausa();

    } while (opt !== '0');

    


}
main();