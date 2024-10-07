import React from "react";
import './Lekcja.css';

const Lekcja = (props) => (
    <>
        <tr>
            {Object.keys(props.nazwa).map(
                (e) => (<td key={e} className={e}>
                    {props.nazwa[e]}
                </td>))
            }
        </tr>
    </>
);
export default Lekcja;