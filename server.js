
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const SPOTIFY_API_KEY = process.env.SPOTIFY_API_KEY;

const PORT = process.env.PORT || 3001; 


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/albums', async (req, res) => {
  try {
    const artists = req.query.artists;
    const tracks = req.query.tracks;
//     const albums = await MovieFetcher.fetchMoviesByCity(city);
//     res.json(albums);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
