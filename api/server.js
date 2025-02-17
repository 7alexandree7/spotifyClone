import express from "express"
import cors from "cors"
import { db } from "./connect.js";

const app = express();
app.use(cors())
const PORT = 3000;

app.get("/", (request, response) => {
    response.send("So vamos trabalhar com os endpoints /artists e /songs")
})

app.get("/artists", async (request, response)  => {
    response.send(await db.collection("artists").find({}).toArray())
})

app.get("/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor esta rodando na porta ${PORT}`)
})
