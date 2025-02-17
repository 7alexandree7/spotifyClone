import axios from "axios";

const BASE__URL = "http://localhost:3000"

const responseArtists =  await axios.get(`${BASE__URL}/artists`)
const responseSongs = await axios.get(`${BASE__URL}/songs`)

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data