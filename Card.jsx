/* eslint-disable react/prop-types */
import '../assets/styles/card.scss'
import DefaultPicture from '../assets/img/...jpg'
import { FaRegTrashCan } from "react-icons/fa6";
import { RiBallPenLine } from "react-icons/ri";
import { useContext } from 'react';
import DataContext from '../Context/DataContext';

const Card = ({kitap}) => {
    const {kitapSil,cardDuzenle,search} = useContext(DataContext)
  return (
    (kitap.kitapAdi.toLowerCase().startsWith(search.toLowerCase())||
    kitap.kitapYazari.toLowerCase().startsWith(search.toLowerCase()))
    &&
    <div className='card'>
      <button className='sil' onClick={()=>kitapSil(kitap.id)} ><FaRegTrashCan size={60} /></button>
      <button className='edit' onClick={()=>cardDuzenle(kitap.id)}><RiBallPenLine size={60} /></button>
      <img src={kitap.kitapResmi?kitap.kitapResmi:DefaultPicture} alt="kitapKapak" />
      <div className="card-body">
        <h4>{kitap.kitapAdi}</h4>
        <p>Yazarı : {kitap.kitapYazari}</p>
        <p>Kategorisi : {kitap.kitapKategorisi}</p>
        <p>Sayfa Sayısı : {kitap.kitapSayfaSayisi}</p>
        <p>Açıklaması : {kitap.kitapAciklamasi.substring(0,kitap.kitapAciklamasi.substring(0,160).lastIndexOf(" "))+"..."}</p>
      </div>
    </div>
  )
}

export default Card