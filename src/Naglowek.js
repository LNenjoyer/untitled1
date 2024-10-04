import React from "react";
import './Naglowek.css';
const Naglowek = (props) => (
    <>
        <tr className="naglowek">
            {props.nag.map((e)=> <th key={e}>{e}</th>)}
        </tr>
    </>
)
export default Naglowek;