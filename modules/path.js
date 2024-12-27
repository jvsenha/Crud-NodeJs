const path = require('path');


//nome do arquivo
console.log(path.basename(__filename))

//caminho do arquivo
console.log(path.dirname(__filename))

//extensão do arquivo
console.log(path.extname(__filename));

//cria objeto path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'));

