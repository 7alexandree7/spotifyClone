import "dotenv/config"
import axios from "axios";

const NODE_ENV = process.env.NODE_ENV

const BASE__URL = NODE_ENV === "development" ? "http://localhost:3000" : "/api"

const responseArtists =  await axios.get(`${BASE__URL}/artists`)
const responseSongs = await axios.get(`${BASE__URL}/songs`)

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data