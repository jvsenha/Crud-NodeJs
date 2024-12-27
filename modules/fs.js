const { log, error } = require("console");
const { LOADIPHLPAPI } = require("dns");
const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, '/test'),(error)=>{
//     if(error){
//         return console.log("Erro: ", error);

//     }
//     console.log("pasta criada com sucesso")
// })

// Caminho do arquivo
const filePath = path.join(__dirname, "/test", "test.txt");

// Escrevendo no arquivo
fs.writeFile(filePath, "hello node\n", (error) => {
  if (error) {
    return console.log("Erro ao criar o arquivo:", error);
  }
  console.log("Arquivo criado com sucesso!");

  // Adicionando ao arquivo
  fs.appendFile(filePath, "hello word\n", (error) => {
    if (error) {
      return console.log("Erro ao adicionar ao arquivo:", error);
    }
    console.log("Conteúdo adicionado com sucesso!");
  });

});

//Ler Arquivo

fs.readFile(filePath, 'utf8', (error, data)=>{
if(error){
return console.log("Erro:", error);
}

return console.log(data);

})
