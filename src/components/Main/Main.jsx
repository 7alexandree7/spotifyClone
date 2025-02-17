import React from 'react'
import ItemList from '../ItemList/ItemList'
import { artistArray } from '../../assets/database/artists'
import { songsArray } from '../../assets/database/songs'

const Main = ({ type }) => {
    
    return (
        <div className='main'>
            {/*Item list de Artistas */}
            {type === "artists" || type ===  undefined ? (
                <ItemList
                    title="Artistas"
                    items={20}
                    itemsArray={artistArray}
                    path="/artists"
                    idPath="/artist"
                />
            ) : <></>}



            {/*Item list de Musicas */}
            {type === "songs" || type === undefined ? (
                <ItemList
                    title="Músicas"
                    items={28}
                    itemsArray={songsArray}
                    path="/songs"
                    idPath="/song"
                />
            ) : <></>}
        </div>
    )
}

export default Main
