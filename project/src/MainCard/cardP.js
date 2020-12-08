import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import Loader from 'react-loader-spinner';
import Provposi from '../CardtabelProv/provposi'
import Provsemb from '../CardtabelProv/provsemb'
import Provmeni from '../CardtabelProv/provmeni';
import Provnama from '../CardtabelProv/provnama';
import shortid from 'shortid';
const CardP = () => {
  const [dataprov, getDataProv] = useState([]);
  const [menunggu, setMenunggu] = useState(true);
  useEffect(()=>{
    axios
    .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then(resp => 
      {
      getDataProv(resp.data.data)
      setMenunggu(false);
      })

}, []);

    return(
   
    <div className = "cont">
    { menunggu?(
   
   <Loader type="ThreeDots" color="#00BFFF" height={150} width={150} />
     
       ) :(
        <div className = 'cont'>
          <table style = {{border:"3px solid black"}}>
            <thead key = {shortid.generate()}>
              <tr>
                <th className = "warnaJTabel">No</th>
                <th className = "warnaJTabel">Provinsi</th>
                <th className = "warnaJTabel">Positif</th>
                <th className = "warnaJTabel">Sembuh</th>
                <th className = "warnaJTabel">Meninggal</th>
              </tr>
            </thead>
            {
              dataprov.map((item, index)=> 
                {
                  return(
                    <tbody key = {shortid.generate()}>
                      <tr>
                          <th className = "warnaTabel" scope = "row" >{index + 1} </th>
                          
                          <th className = "warnaTabel">
                          <Provnama
                          nama={item.provinsi} 
                          />
                          </th>
      
                          <th className = "warnaTabel">
                          <Provposi
                          positif={item.kasusPosi} 
                          />
                          </th>
      
                          <th className = "warnaTabel">
                          <Provsemb
                          sembuh={item.kasusSemb} 
                          />
                            </th >

                          <th className = "warnaTabel">
                          <Provmeni
                          meninggal={item.kasusMeni}                     
                          />
                          </th>
                      </tr>                 
                  </tbody>
                  )
              }
              )      
            }
        </table>
        </div>
      )
    }
    </div>
  
 );
}
export default CardP;










