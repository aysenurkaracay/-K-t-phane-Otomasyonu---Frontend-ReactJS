/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "../assets/img/Logo1.png"
import '../assets/styles/navi.scss'
import { useContext } from 'react'
import DataContext from '../Context/DataContext'
const Navi = () => {
  const {kategoriler,setSecilenKategori} = useContext(DataContext);
  return (
    <nav>
      <div className="brand">
        <img src={Logo} alt="logo" />
        <h3>Ayşenur Karaçay Kütüphanesi</h3>
      </div>
      <ul className="kategoriler">
            {
               kategoriler.map(kategori=>
                <li onClick={(e)=>setSecilenKategori(e.target.innerText)} key={kategori.id}>{kategori.kategoriAdi}</li>
                )
            }
        </ul>
    </nav>
  )
}

export default Navi