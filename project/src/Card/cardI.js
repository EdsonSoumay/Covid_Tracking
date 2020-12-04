import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'

const CardI = () => {
  const [jumlahKasus, setJumlahKasus] = useState([]);
  const [meninggal, setMeninggal] = useState([]);
  const [sembuh, setSembuh] = useState([]);
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) =>

     
     { 
    setJumlahKasus(response.data.jumlahKasus);
     setMeninggal(response.data.meninggal);
     setSembuh(response.data.sembuh);
    })  
 }, []);


  return(
  <div>
    <h4>Jumlah kasus di Indonesia </h4>
    <div className = "cont2">
    <h1 className ="positif"> <p>Positif</p> {jumlahKasus}</h1>
    <h1 className ="meninggal"><p>Meninggal</p> {meninggal}</h1>
    <h1 className ="sembuh "> <p>Sembuh</p> {sembuh}</h1>
    </div>  
  </div>
  
);

  
};
export default CardI;



