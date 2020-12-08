import React, { useEffect, useState } from 'react';
import axios from "axios"
import "../App.css"
import Loader from 'react-loader-spinner';
import CBoxGP from '../CardBoxIndoGlobal/CboxP';
import CBoxGM from '../CardBoxIndoGlobal/CboxM';
import CBoxGS from '../CardBoxIndoGlobal/CboxS';

const CardG = () => {
  const [confirmed, setKasusTerkonfirmasi] = useState("");
  const [deaths, setKasusMeninggal] = useState("");
  const [recovered, setSembuh] = useState("");
  const [menunggu, setMenunggu] = useState(true);
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((resp) =>
        { 
        setKasusTerkonfirmasi(resp.data.confirmed);
        setKasusMeninggal(resp.data.deaths);
        setSembuh(resp.data.recovered);
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
                        nilai={confirmed.value} 
                      />       
                      <CBoxGM 
                      status = 'Meninggal'
                        nilai={deaths.value} 
                      />
                      <CBoxGS 
                      status = 'Sembuh'
                        nilai={recovered.value} 
                      />
                  </div>
                  )
            
      }
        </div>
  </>
      
 );

};
export default CardG;
