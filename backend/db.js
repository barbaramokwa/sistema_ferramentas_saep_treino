const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'saep_db'
});

connection.connect((erro) => {
    if(erro){
        console.log('erro ao conectar ao banco de dados: ', erro);
        return;
    }
    console.log('banco de dados saep_db conectado com sucesso!')
});

module.exports = connection;