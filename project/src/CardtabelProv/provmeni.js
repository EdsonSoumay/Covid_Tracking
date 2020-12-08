import React from 'react'
import '../App.css';
import NumberFormat from "react-number-format";

const Provmeni = (props) =>{
    return (
        <div >
               <table>
                    <thead> 
                          <tr> 
                                <th className='warnaTabel'><NumberFormat value = {props.meninggal}thousandSeparator={true} displayType ={'text'}/></th> 
                          </tr>
                    </thead>
             </table>
        </div>
    )
}

export default Provmeni;
