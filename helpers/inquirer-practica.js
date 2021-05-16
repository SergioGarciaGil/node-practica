

const inquirer = require('inquirer');
const colors = require('colors');


const preguntas= [
    {
        type: 'list',
        name: 'opcion',
        message: 'que desea hacer?',
        choices:[
            {
                value: '1',
                name: '1. Crear tarea'

            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];
const inquirerMenu1 = async() => {
    console.clear();
    console.log('================================'.green);
    console.log('       Seleccione una opción1   '.green);
    console.log('==============================\n'.green);

    
     const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}
const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n')
    await inquirer.prompt(question)
}

module.exports = {
    inquirerMenu1,
    pausa
}

