const express = require("express");
const UserModel = require("../src/Models/user.models");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Type:${req.method}`);
  next();
});

app.set('view engine', 'ejs');
app.set('views', 'src/views')


app.get('/views/users', async (req, res) => {
  const users = await UserModel.find({});
  res.render("index",{users})
})

app.get("/home", (req, res) => {
  res.status(200).send("<h1>hello world</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/usersById", async (req, res) => {
  try {
    const userId = req.body.id;
    const users = await UserModel.findById(userId);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.post("/usersById/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const users = await UserModel.findById(userId);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/updateUser", async (req, res) => {
  try {
    const user = req.body;
    await UserModel.findByIdAndUpdate(user.id, user, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/deleteUser", async (req, res) => {
  try {
    const userId = req.body.id;
    await UserModel.findByIdAndDelete(userId);
    res.status(200).send(`Usuario deletado com sucesso!`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
const port = 8080;

app.listen(port, () => console.log(`Rodando em http://localhost:8080/home`));
