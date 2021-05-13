const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tareas '

            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas comnpletadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '0',
                name: '0. salir'
            }


        ]

        
    }
];

const mostrarMenu = async () => {
   console.clear();
    console.log('**************************************'.yellow);
    console.log('         Escoja una opcion         '.yellow);
    console.log('**************************************\n'.yellow);
    
    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'Enter',
            message: `Presione ${'Enter'.green} para poder continuar`
       
        }
    ];
    await inquirer.prompt(question);
}


module.exports = {
    mostrarMenu,
    pausa
}


