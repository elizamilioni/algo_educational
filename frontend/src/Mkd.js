import React, { useState } from 'react';


function Mkd() {
    const [inputX, setInputX] = useState()
    const [inputY, setInputY] = useState()
    const [times, setTimes] = useState()
    const [z, setZ] = useState()
    const [x, setX] = useState()
    const [y, setY] = useState()
    const [correctRes, setCorrectRes] = useState([])
    const [correctTimes, setCorrectTimes] = useState()
    console.log(z)

    const runAlgo = () => {
        var x = inputX
        var y = inputY
        var z = y
        var cnt = 0
        while(z !== 0) {
            z  = x % y 
            x = y
            y = z
            cnt = cnt + 1
        }
        setCorrectTimes(cnt)
        setCorrectRes([z, x, y])
        console.log(correctTimes, correctRes, times, z, x, y)
    }

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
            <h4 style={{paddingLeft: '5px'}}> Επιλέξτε τιμές μεταβλητών</h4>
                <div>
                    <label style={{paddingLeft: '5px'}}> X:  </label>
                    <input onChange={() => setInputX()}
                            style={{borderRadius: '20%', width: '30px', height: '30px'}}/>
                    <br/> <br/>
                    <label style={{paddingLeft: '5px'}}> Y:  </label>
                    <input onChange={() => setInputY()}
                            style={{borderRadius: '20%', width: '30px', height: '30px'}}/>
                </div>
            <h4 style={{paddingLeft: '5px'}}> Αφού τρέξετε τον αλγόριθμο και σημείωσετε όλες τις ενδιάμεσες τιμές 
                των μεταβλητών απαντήστε στις παρακάτω ερωτήσεις:</h4>
            <p style={{paddingLeft: '5px'}}> α) Πόσες φορές θα εκτελεστεί η επανάληψη</p>
            <input onChange={(e) => setTimes(e.target.value)}
                            style={{borderRadius: '20%', width: '30px', height: '30px', marginLeft: '20px'}}/>
            <p style={{paddingLeft: '5px'}}> β) Ποιές θα είναι οι τελικές τιμές του αλγορίθμου;</p>
            <table>
                <tr> 
                    <th> z </th>
                    <th> x </th>
                    <th> y </th>
                </tr>
                <tr>
                    <td> 
                        <input onChange={(e) => setZ([e.target.value])}/>
                    </td>
                    <td> 
                        <input onChange={(e) => setX([e.target.value])}/>
                    </td>
                    <td> 
                        <input onChange={(e) => setY([e.target.value])}/>
                    </td>
                </tr>
            </table>
            <button onClick={runAlgo} style={{marginLeft: '500px'}}> Υποβολή </button>
        </div>
    )
}

export default Mkd;