/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast, Flip } from "react-toastify";


//context oluşturulur.
const DataContext = createContext();

//oluşturulan context için bir sağlayıcı oluşturulur.
export const DataProvider = ({children})=>{
    //Projedeki tüm metot ve stateler buraya taşınacak!!!
    //App.jsx'dekiler
    const [kitaplik,setKitaplik] = useState([]);
    const [kategoriler,setKategoriler] = useState([]);
    const [secilenKitap,setSecilenKitap] = useState("");
    const [secilenKategori,setSecilenKategori] = useState("");
    const [search,setSearch] = useState("");

    const kitaplariGetir = async ()=>{
    let url = "http://localhost:3005/kitaplar";
    if(secilenKategori && secilenKategori !== "Tüm Kitaplar"){
        url+=`?kitapKategorisi=${secilenKategori}`
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplik(kitaplar);
    }
    const kategorileriGetir = async()=>{
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
    }

    useEffect(()=>{
    kategorileriGetir();
    },[])

    useEffect(()=>{
    kitaplariGetir();
    },
    [secilenKategori])

    const yeniKitapEkle =async (yeni)=> {
    let url = "http://localhost:3005/kitaplar";
    if(!secilenKitap){//kitap ekleme bölümü
        const response = await axios.post(url,yeni);
        console.log(response);
        setKitaplik(prev=>[...prev,yeni]);
        toast.success('Yeni Kitap Eklendi!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });

    }else{//kitap düzenleme bölümü
        url += `/${secilenKitap.id}`;
        const response = await axios.put(url,yeni);
        setSecilenKitap("");
        // kitaplariGetir(); Yanlış Kullanım!!
        setKitaplik(prev=>
        prev.map(kitap=>{
            if(kitap.id === secilenKitap.id){
            return {...response.data}
            }else{
            return {...kitap}
            }
        })
        )
        toast.info('Kitap Düzenlendi!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
    }
    
    }

    const kitapSil = async (id) => {
    const confirmation = confirm("Kitabı silmek istediğinize emin misiniz?");

    const url = `http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url);
    if(confirmation){
       const response = await axios.patch(url,{isDeleted:true});
        setKitaplik(prev=>prev.filter(kitap=> kitap.id!==id));
        toast.error('Kitap Silindi!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            }); 
    }
    
    }

    //card üzerindeki düzenle butonu için
    const cardDuzenle = (id) =>{
    const duzenlenecekKitap = kitaplik.filter(kitap=>kitap.id === id)[0];
    setSecilenKitap(duzenlenecekKitap);
    // console.log(duzenlenecekKitap);
    setKitapAdi(duzenlenecekKitap.kitapAdi);
    setKitapYazari(duzenlenecekKitap.kitapYazari);
    setKitapKategorisi(duzenlenecekKitap.kitapKategorisi);
    setKitapSayfaSayisi(duzenlenecekKitap.kitapSayfaSayisi);
    setKitapResmi(duzenlenecekKitap.kitapResmi);
    setKitapAciklamasi(duzenlenecekKitap.kitapAciklamasi);
    }

    //Forms.jsx'den gelenler
    const [kitapAdi,setKitapAdi] = useState("");
    const [kitapYazari,setKitapYazari] = useState("");
    const [kitapKategorisi,setKitapKategorisi] = useState("Kategori Seçiniz");
    const [kitapSayfaSayisi,setKitapSayfaSayisi] = useState("");
    const [kitapAciklamasi,setKitapAciklamasi] = useState("");
    const [kitapResmi,setKitapResmi] = useState("");
 
    const handleSubmit = (e)=>{
      e.preventDefault(); //submit butonunun default sayfaya refresh atmasını engeller.
      yeniKitapEkle({
        id:(Number(kitaplik[kitaplik.length-1].id)+1).toString(),
        kitapAdi:kitapAdi,
        kitapYazari:kitapYazari,
        kitapKategorisi:kitapKategorisi,
        kitapSayfaSayisi:kitapSayfaSayisi,
        kitapAciklamasi:kitapAciklamasi,
        kitapResmi:kitapResmi
      });
      //form resetleme
      setKitapAdi("");
      setKitapYazari("");
      setKitapSayfaSayisi("");
      setKitapResmi("");
      setKitapKategorisi("Kategori Seçiniz");
      setKitapAciklamasi("");
    }
    // useEffect(()=>{
    //   if(secilenKitap){
    //     setKitapAdi(secilenKitap.kitapAdi);
    //     setKitapYazari(secilenKitap.kitapYazari);
    //     setKitapKategorisi(secilenKitap.kitapKategorisi);
    //     setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
    //     setKitapResmi(secilenKitap.kitapResmi);
    //     setKitapAciklamasi(secilenKitap.kitapAciklamasi);
    //   }
    // },[secilenKitap])


    return  <DataContext.Provider value={{
        kitapSil,cardDuzenle,search, //Card.jsxdekiler
        kitaplik,setSearch, //CardList.jxsdekiler
        secilenKitap, //Forms.jsxdekiler
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
        kategoriler,setSecilenKategori // Navi.jsxdekiler
    }}>
                {children}
            </DataContext.Provider>
}


export default DataContext;