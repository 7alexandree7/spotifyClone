import React, { useState } from 'react'
import SongItem from '../SongItem/SongItem'

const SongList = ({songsArrayFromArtist}) => {
   const [items, setItems] = useState(5)

  return (
    <div className='song-list'>
      {songsArrayFromArtist
      .filter((currentValue, index) => index < items)
      .map((currentValue, index) => (
        <SongItem {...currentValue} index={index}/>
      ))
      }
      <p onClick={() => setItems(10)} className="song-list__see-more">Ver mais</p>
    </div>
  )
}

export default SongList
