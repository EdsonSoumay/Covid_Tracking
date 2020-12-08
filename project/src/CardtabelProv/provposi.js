import React from 'react'
import '../App.css';
import NumberFormat from "react-number-format";

const Provposi = (props) =>{
    return (

       <div >
        <table>
            <thead>
                 <tr> 
                     <th className='warnaTabel'><NumberFormat value = {props.positif}thousandSeparator={true} displayType ={'text'}/></th> 
                 </tr>
            </thead>
        </table>
       </div>
    )
}

export default Provposi;
