import React from 'react'

const Provinsi = () => {
    return (
        <div>
            <h1>per provinsi</h1>
        </div>
    )
}

export default Provinsi;



/*
import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../../App.css'

const Provinsi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
     .then((response) => setData(response.data))  
 }, []);


  return(
  <div>
    <h1> {kodeProvi}</h1> 
  </div>
  
);

  
};
export default Provinsi;



*/
















