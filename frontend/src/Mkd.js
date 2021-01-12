import React, { useState } from 'react';


function Mkd() {
    const [z, setZ] = useState([])
    const [z1, setZ1] = useState()
    console.log(z)

    return (
        <div>
            <h2 style={{textAlign: 'center'}}> Αλγόριθμος Ευκλείδη</h2>
            <div style={{paddingLeft: '5px'}}>
                <p style={{textAlign: 'left'}}> Δεδομένα: x, y </p>
                <p>z = y </p>
                <p> Όσο z!=0 επανάλαβε</p>
                <div style={{paddingLeft: '15px'}}>
                    <p> z = x mod y </p>
                    <p> x = y</p>
                    <p> y = z</p>
                </div>
                <p> Τέλος_επανάληψης</p>
                <p> Αποτελέσματα x </p>
                <p> Τέλος Ευκλείδης </p>
            </div>
            <table>
                <tr> 
                    <th> z </th>
                    <th> x </th>
                    <th> y </th>
                </tr>
                <tr>
                    <td> 
                        <input onChange={(e) => setZ([...z, e.target.value])}/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Mkd;