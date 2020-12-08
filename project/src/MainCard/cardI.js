import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import Loader from 'react-loader-spinner';
import CBoxGP from '../CardBoxIndoGlobal/CboxP';
import CBoxGM from '../CardBoxIndoGlobal/CboxM';
import CBoxGS from '../CardBoxIndoGlobal/CboxS';

const CardI = () => {
  const [terkonfirmasi, setKasusTerkonfirmasi] = useState("");
  const [meninggal, setKasusMeninggal] = useState("");
  const [selamat, setSelamat] = useState("");
  const [menunggu, setMenunggu] = useState(true);
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((resp) =>
        { 
        setKasusTerkonfirmasi(resp.data);
        setKasusMeninggal(resp.data);
        setSelamat(resp.data);
        setMenunggu(false);
        })  
 }, []);

 return(
  <>
   <div className = 'cont'>
     {
      menunggu?(
              <>
                <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
              </>
                ) :(
                  
                  <div className = 'cont'>     
                      <CBoxGP 
                      status = 'Positif'
                        nilai={terkonfirmasi.jumlahKasus} 
                      /> 
                      
                      <CBoxGM 
                      status = 'Meninggal'
                        nilai={meninggal.meninggal} 
                      />
                      <CBoxGS 
                      status = 'Sembuh'
                        nilai={selamat.sembuh} 
                      />
                  </div>
              )
       }
       </div>
    </>
 );  
};
export default CardI;
