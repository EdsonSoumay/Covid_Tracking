import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../../App.css'

const Indonesia = () => {
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
  <div className = "kotak2">
    <h1 className ="dataNumber1">Positif {jumlahKasus}</h1>
    <h1 className ="dataNumber2">meninggal {meninggal}</h1>
    <h1 className ="dataNumber3">Sembuh {sembuh}</h1>
  
  </div>
  
);

  
};
export default Indonesia;



