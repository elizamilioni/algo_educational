import React, { useState } from 'react';
import Popup from 'reactjs-popup';


function Mkd() {
    const [inputX, setInputX] = useState()
    const [inputY, setInputY] = useState()
    const [times, setTimes] = useState()
    const [correctRes, setCorrectRes] = useState([])
    const [intermediateV, setIntermediateV] = useState([])
    const [z, setZ] = useState()
    const [x, setX] = useState()
    const [y, setY] = useState()
    const [open, setOpen] = useState(false)

    const check = (e) => {
        e.preventDefault();
        let xc = inputX
        let yc = inputY
        let zc = yc
        let cnt = 0
        while(zc !== 0) {
            zc  = xc % yc 
            xc = yc
            yc = zc
            cnt = cnt + 1
            setCorrectRes(correctRes.push([zc, xc, yc]))
        }
        console.log(correctRes)
        if (times === String(cnt)) {
            console.log('correct times')
        } else {
            console.log('Not correct times')
        }
        if (z === String(zc)) {
            if (x === String(xc)) {
                if (y === String(yc)) {
                    console.log('Everything correct')
                } else {
                    console.log('Not correct y')
                }
            } else {
                console.log('Not correct x')
            }
        } else {
            console.log('Not corret z')
        }
        setCorrectRes([])
        setOpen(true)
    }
    console.log(open)

    return (
        <div>
            <h2 style={{textAlign: 'center'}}> Αλγόριθμος Ευκλείδη</h2>
            <div style={{paddingLeft: '10px', borderStyle: 'dotted'}}>
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
            <form onSubmit={check}> 
                <h4 style={{paddingLeft: '5px'}}> Επιλέξτε τιμές μεταβλητών</h4>
                    <div>
                        <label style={{paddingLeft: '5px'}}> X:  </label>
                        <input onChange={(e) => setInputX(e.target.value)} required
                                style={{borderRadius: '20%', width: '30px', height: '30px'}}/>
                        <br/> <br/>
                        <label style={{paddingLeft: '5px'}}> Y:  </label>
                        <input onChange={(e) => setInputY(e.target.value)} required
                                style={{borderRadius: '20%', width: '30px', height: '30px'}}/>
                    </div>
                <h4 style={{paddingLeft: '5px'}}> Αφού τρέξετε τον αλγόριθμο και σημείωσετε όλες τις ενδιάμεσες τιμές 
                    των μεταβλητών απαντήστε στις παρακάτω ερωτήσεις:</h4>
                <p style={{paddingLeft: '5px'}}> α) Πόσες φορές θα εκτελεστεί η επανάληψη</p>
                <input onChange={(e) => setTimes(e.target.value)} required
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
                            <input onChange={(e) => setZ(e.target.value)} required
                                    style={{borderRadius: '20%', width: '30px', height: '30px', marginLeft: '5px'}}/>
                        </td>
                        <td> 
                            <input onChange={(e) => setX(e.target.value)} required
                                style={{borderRadius: '20%', width: '30px', height: '30px', marginLeft: '5px'}}/>
                        </td>
                        <td> 
                            <input onChange={(e) => setY(e.target.value)} required
                                    style={{borderRadius: '20%', width: '30px', height: '30px', marginLeft: '5px'}}/>
                        </td>
                    </tr>
                </table>
                <button style={{marginLeft: '5px', backgroundColor:'#282c34', 
                                borderRadius: '50%', borderWidth: '1px', width: '100px',
                                height: '50px'}}> 
                            Υποβολή 
                </button>
            </form>
            <Popup open={open} onClose={() => setOpen(false)}>
                <div style={{borderStyle: 'dotted', backgroundColor: 'transparent'}}>
                    <p>Message </p>
                </div>
            </Popup>
        </div>
    )
}

export default Mkd;