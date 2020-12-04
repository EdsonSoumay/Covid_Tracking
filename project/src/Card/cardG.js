import React, { useEffect, useState } from 'react';
import axios from "axios"
import "../App.css"

const CardG = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) =>
     { 
    setConfirmed(response.data.confirmed.value);
     setDeaths(response.data.deaths.value);
     setRecovered(response.data.recovered.value);
    })  
 }, []);


  return(
    
  <div>
    <h4>Jumlah kasus seluruh Dunia </h4>
      <div className ="cont2">
    <h1 className ="positif"><p>Positif</p> {confirmed}</h1>
    <h1 className ="meninggal"><p>Meninggal</p> {deaths}</h1>
    <h1 className ="sembuh "><p>Sembuh</p> {recovered}</h1>
    </div>

  </div>
  
);

  
};
export default CardG;


