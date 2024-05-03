/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [sayac,setSayac]= useState(0)
  const [bos,setBos] = useState(false)

  // useEffect(()=>{
  //   console.log("UseEffect Çalıştı!");
  // }) // bu yapı sayfa yüklendiğinde 1kere çalışır ve sayfada herhangi bir değişiklik olduğunda tekrar çalışır.
  // useEffect(()=>{
  //   console.log("2.UseEffect Çalıştı!");
  // },[]) //bu yapı sayfa yüklendiğinde sadece 1 defa çalışır.
  // useEffect(()=>{
  //   console.log("3.UseEffect Çalıştı!");
  // },[sayac])
  // useEffect(()=>{
  //   console.log("4.UseEffect Çalıştı!");
  // },[bos])
  // useEffect(()=>{
  //   console.log("5.UseEffect Çalıştı!");
  // },[bos,sayac]) // 3.4. ve 5. yapı sayfa yüklendiğinde 1 kere çalışır. bağımlı olduğı yapı değiştiğinde tekrar çalışır.
  // useEffect(()=>{
  //   console.log("5.UseEffect Çalıştı!");
  //   return ()=>{
  //     console.log("Clean-Up Çalıştı!");
  //   }
  // },[bos]) //debouncing de kullanılır.

  return (
    <div style={{textAlign:"center"}}>
      <h3>Hello</h3>
      <button onClick={()=>setSayac(sayac+1)}>+</button>
      <span style={{margin:"10px"}}>{sayac}</span>
      <button onClick={()=>setSayac(sayac-1)}>-</button>
      <br /><br />
      <button onClick={()=>setBos(bos===false?true:false)}>Boş Buton</button>
    </div>
  )
}

export default App