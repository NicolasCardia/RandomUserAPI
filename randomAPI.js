/*var faker = require('faker/locale/de');

console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));*/

const express = require('express'); //faz requisição do exprees que foi instalado com npm install
const app = express() //passa o express para uma constante que vai ser usada mais pra frente

const faker = require('faker'); //faz requisição de express que foi instalado com npm intall


const port = 3000; //passa o numero da porta

faker.locale = 'pt_BR'; //coloca que as consfig dele é br




app.get('/', (req, res) => {   //aqui que pega as requisições no repositorio faker 

    const primeiroNome = faker.name.firstName(); 
    const ultimoNome = faker.name.lastName();
    const genero = faker.name.gender();
    const dataNascimento = `${faker.date.past(50, 2000).getDay()}/${faker.date.past(50, 2000).getMonth()}/${faker.date.past(50, 2000).getFullYear()}`;
    const email = faker.internet.email();
    const senha = faker.internet.password();



  return res.send( //coloca os resultados ona tela

    pessoa = {
        primeiroNome,
        ultimoNome,
        genero,
        dataNascimento,
        email,
        senha
    }

)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
