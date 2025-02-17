import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

    const pathName = useLocation().pathname
    const isHome = pathName === "/"
    const finalItems = isHome ? items : Infinity

    return (
        <div className="item-list">
            <div className='item-list__header'>
                <h2>{title} Populares</h2>
                {isHome && (<Link className='tem-list__link' to={path}>Mostrar Tudo</Link>)}
            </div>
            <div className="item-list__container">
                {itemsArray
                    .filter((currentValue, index) => index < finalItems)
                    .map((currentValue, index) => (
                        <SingleItem {...currentValue} key={`${title} - ${index}`} idPath={idPath} />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList
