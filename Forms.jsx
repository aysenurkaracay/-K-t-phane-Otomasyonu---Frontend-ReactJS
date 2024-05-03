/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import '../assets/styles/forms.scss'
import DataContext from '../Context/DataContext'

const Forms = () => {
  const {
    secilenKitap,
    kitapAdi,
    kitapYazari,
    kitapKategorisi,
    kitapResmi,
    kitapSayfaSayisi,
    kitapAciklamasi,
    setKitapAdi,
    setKitapYazari,
    setKitapKategorisi,
    setKitapResmi,
    setKitapSayfaSayisi,
    setKitapAciklamasi,
    handleSubmit,
  
  } = useContext(DataContext);


  return (
    <form onSubmit={handleSubmit}>
      <h3>{secilenKitap?"Kitap Düzenle":"Kitap Ekle"}</h3>
      <input value={kitapAdi} onChange={e=>setKitapAdi(e.target.value)} type="text" placeholder='Kitap Adı' />
      <input value={kitapYazari} onChange={e=>setKitapYazari(e.target.value)} type="text" placeholder='Kitap Yazarı' />
      <select value={kitapKategorisi} onChange={e=>setKitapKategorisi(e.target.value)}>
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Kişisel Gelişim</option>
        <option>Eğitim</option>
        <option>Roman</option>
        <option>Psikoloji</option>
         <option>Diğer</option>
        </select>
        <input value={kitapSayfaSayisi} onChange={e=>setKitapSayfaSayisi(e.target.value)} type="number" placeholder='Sayfa Sayısı' />
      <input value={kitapResmi} onChange={e=>setKitapResmi(e.target.value)} type="text" placeholder='Kitap Resmi(url)' />
      <textarea value={kitapAciklamasi} onChange={e=>setKitapAciklamasi(e.target.value)} placeholder='Kitap Açıklaması'> </textarea>
      <input disabled={
        kitapAdi==="" || 
        kitapYazari==="" || 
        kitapKategorisi==="Kategori Seçiniz" || 
        kitapSayfaSayisi==="" || 
        kitapAciklamasi===""} type="submit" value={secilenKitap?"Düzenle":"Ekle"} />
    </form>
  )
}

export default Forms