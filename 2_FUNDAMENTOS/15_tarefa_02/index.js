const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer.prompt([{

    name: 'p1',
    message: "Qual o seu nome ?"

},
{
    name: 'p2',
    message: "Qual a sua idade ?"

}
]).then((answers) => {
    if (!answers.p1 || !answers.p2) {
        throw new Error('Preencha os campos')
    }
    console.log(chalk.bgYellow.black(`Olá ${answers.p1}, você tem ${answers.p2} anos`))
}).catch((err) => console.log(err))