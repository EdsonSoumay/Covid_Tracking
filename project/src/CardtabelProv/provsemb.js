import React from 'react'
import '../App.css';
import NumberFormat from "react-number-format";

const Provsemb = (props) =>{
    return (
        <div>
            <th className='warnaTabel'><NumberFormat value = {props.sembuh}thousandSeparator={true} displayType ={'text'}/></th>      
        </div>
    )
}

export default Provsemb;
