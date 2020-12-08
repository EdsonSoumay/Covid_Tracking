import React from 'react'
import '../App.css';
import NumberFormat from "react-number-format";

const Provmeni = (props) =>{
    return (
        <div >
            <th className='warnaTabel'><NumberFormat value = {props.meninggal}thousandSeparator={true} displayType ={'text'}/></th>      
        </div>
    )
}

export default Provmeni;
