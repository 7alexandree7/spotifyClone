import React from 'react'
import Player from '../../components/Player/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../../assets/database/songs'
import { artistArray } from '../../assets/database/artists'

const Song = () => {

  const { id } = useParams()

  const { image, name, duration, artist, audio, index } = songsArray.filter((currentValue) => currentValue._id === id)[0]
  const artistobj = artistArray.filter((currentValue, index) => currentValue.name === artist)[0]

  const songsArrayFromArtist = songsArray.filter((currentValue, index) => currentValue.artist === artistobj.name)

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
  const randomIdFromArtist = songsArray[randomIndex]._id

  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
  const randomIdFromArtist2 = songsArray[randomIndex2]._id

  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt="imagem da musica x" />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistobj._id}`} className='song__artist-image'>
          <img width={70} height={70} src={artistobj.image} alt={`imagem do artista ${artist}`} />
        </Link>
        <Player duration={duration}  randomIdFromArtist={randomIdFromArtist} randomIdFromArtist2={randomIdFromArtist2} audio={audio}/>
        <div className=''>
          <p className='song__name'>{artist}</p>
          <p>{name}</p>
        </div>
      </div>

    </div>
  )
}

export default Song
