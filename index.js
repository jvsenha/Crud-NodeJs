const { Person } = require("./person");
const person = new Person("joao");
const dotenv = require('dotenv');
dotenv.config();
require("./modules/express")//ficar depois do dotenv.config

const connectToDatabase = require('./src/database/connect');
connectToDatabase();


