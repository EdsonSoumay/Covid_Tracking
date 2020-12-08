import React from 'react'
import '../App.css';
import NumberFormat from "react-number-format";

const CboxS = (props) =>{
    return (
        <div className ='sembuh'>
           <p><b>{props.status}</b></p> 
            <p><NumberFormat value={props.nilai} thousandSeparator={true} displayType={'text'}/></p>       
        </div>
    )
}

export default CboxS;

