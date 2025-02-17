import { MongoClient } from "mongodb"

const URI = "mongodb+srv://xande:hyper7@cluster0.c9ci3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(URI);

export const db = client.db("spotifyClone");