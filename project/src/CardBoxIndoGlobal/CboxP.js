import React from 'react'
import '../App.css';
import NumberFormat from "react-number-format";

const CboxP = (props) =>{
    return (
        <div className ='positif'>
            <p><b>{props.status}</b></p>
            <p><NumberFormat value={props.nilai} thousandSeparator={true} displayType={'text'}/></p>       
        </div>
    )
}

export default CboxP;

