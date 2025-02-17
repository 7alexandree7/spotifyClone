import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import SongList from '../../components/SongList/SongList'
import { artistArray } from '../../assets/database/artists'
import { songsArray } from '../../assets/database/songs'

const Artist = () => {

  const {id} = useParams()
  const artistObj = artistArray.filter((currentValue) => currentValue._id === id)[0]
  const {banner, name} = artistObj
  const songsArrayFromArtist = songsArray.filter((currentValue, index) => currentValue.artist === name )

  const randomIndex= Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
  const randomIdFromArtist = songsArray[randomIndex]._id

  return (
    <div className='artist'>
      <div
       className='artist__header'
       style={{
        backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`
       }}
       >
        <h2>{name}</h2>
       </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArrayFromArtist={songsArrayFromArtist} />
      </div>
      <Link to={`/song/${randomIdFromArtist}`}><FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} /></Link>
    </div>
  )
}

export default Artist
