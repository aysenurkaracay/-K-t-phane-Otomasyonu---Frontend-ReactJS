/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../Context/DataContext'

const CardList = () => {
  const {kitaplik,setSearch} = useContext(DataContext)
  return (
    <div className='card-list'>
      <input onChange={e=>setSearch(e.target.value)} type="search" placeholder='Ara..'/>
      {
        kitaplik.map(kitap=>
          !kitap.isDeleted&&
            <Card key={kitap.id} kitap={kitap}/>
          )
      }
        
    </div>
  )
}

export default CardList