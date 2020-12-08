import React from 'react'
import '../App.css';
import NumberFormat from "react-number-format";

const Provsemb = (props) =>{
    return (
        <div >
            <table>
                    <thead>
                            <tr> 
                                  <th className='warnaTabel'><NumberFormat value = {props.sembuh}thousandSeparator={true} displayType ={'text'}/></th> 
                             </tr>
                    </thead>
            </table>
        </div>
    )
}

export default Provsemb;
