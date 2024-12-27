const mongoose = require("mongoose");
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.s9hpc.mongodb.net/database?retryWrites=true&w=majority&appName=cursoNodeJs`
    );
    return console.log("Conexão realizada com sucesso!");
  } catch (error) {
    console.error(
      "Ocorreu um erro ao conectar ao banco de dados:",
      error.message
    );
  }

};

module.exports = connectToDatabase;
