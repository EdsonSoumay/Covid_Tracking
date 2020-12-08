import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import Loader from 'react-loader-spinner';
import Provposi from '../CardtabelProv/provposi'
import Provsemb from '../CardtabelProv/provsemb'
import Provmeni from '../CardtabelProv/provmeni';
import Provnama from '../CardtabelProv/provnama';

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
    <>
    <div className = "cont">
    { menunggu?(
    <>
   <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
     </>
       ) :(
        <div className = 'cont'>
          <table border="3">
            <tr>
              <th className = "warnaJTabel">No</th>
              <th className = "warnaJTabel">Provinsi</th>
              <th className = "warnaJTabel">Positif</th>
              <th className = "warnaJTabel">Sembuh</th>
              <th className = "warnaJTabel">Meninggal</th>
            </tr>
            {
              dataprov.map((item, index)=> 
                {
                  return(
                    <>
                      <tr>
                          <th className = "warnaTabel" scope = "row" key = {item.fid}>{index + 1} </th>
                          
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
                  </>
                  )
              }
              )      
            }
        </table>
        </div>
      )
    }
    </div>
  </>
 );
}
export default CardP;










