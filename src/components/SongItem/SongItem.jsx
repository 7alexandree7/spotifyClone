import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({name, image, duration, _id, index}) => {
    

    return (
        <Link className='song-item' to={`/song/${_id}`}>
            <div className="song-item__number-album">
                <p className=''>{index + 1}</p>
                <div className="song-item__album">
                    <img className='song-item__image' src={`${image}`} alt={`Imagem da música ${name}`} />
                    <p className='song-item__name'>{name}</p>
                </div>
            </div>
            <p>{duration}</p>
        </Link>
    )
}

export default SongItem
