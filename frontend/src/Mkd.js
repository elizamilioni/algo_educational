import React, { useState } from 'react';
import Popup from 'reactjs-popup';


function Mkd() {
    const [inputX, setInputX] = useState()
    const [inputY, setInputY] = useState()
    const [times, setTimes] = useState()
    const [correctRes, setCorrectRes] = useState([])
    const [correctTable, setCorrectTable] = useState([])
    const [intermediateV, setIntermediateV] = useState([])
    const [z, setZ] = useState()
    const [x, setX] = useState()
    const [y, setY] = useState()
    const [open, setOpen] = useState(false)
    const [solution, setSolution] = useState(false)
    const [messageA, setMessageA] = useState('')
    const [messageB, setMessageB] = useState('')

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
        console.log('edw1', correctRes)
        if (times === String(cnt)) {
            setMessageA('a) Σωστό')
        } else {
            setMessageA('α) Λάθος')
        }
        if (z === String(zc)) {
            if (x === String(xc)) {
                if (y === String(yc)) {
                    setMessageB('β) Σωστό')
                } else {
                    setMessageB('β) Το y είναι λάθος')
                }
            } else {
                setMessageB('β) Το x είναι λάθος')
            }
        } else {
            setMessageB('β) Το z είναι λάθος')
        }
        setOpen(true)
        setCorrectTable(correctRes)
        setCorrectRes([])
    }

    return (
        <div>
            <div style={open ? {opacity: '0.3'} : {} }>
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
            </div>
            <Popup open={open} onClose={() => {setOpen(false); setMessageA(''); setMessageB(''); setCorrectTable([])}}>
                <div style={{borderStyle: 'solid', backgroundColor: 'gray', height: '120px', width: '200px'}}>
                    <p>{messageA} </p>
                    <p>{messageB} </p>
                    <button onClick={() => setSolution(true)}
                            style={{marginLeft: '100px', backgroundColor:'#A3FF33', 
                            borderRadius: '20%', borderWidth: '1px', width: '100px',
                            height: '30px'}}>
                        Δες τη λύση 
                    </button>
                </div>
            </Popup>
            <Popup open={solution} onClose={() => setSolution(false)}>
                <div style={{borderStyle: 'solid', backgroundColor: 'gray', height: '120px', width: '200px'}}>
                    <table>
                        <tr> 
                            <th> z </th>
                            <th> x </th>
                            <th> y </th>
                        </tr>
                        {correctTable.map((row, i) => (
                            <tr>
                                <td key={i}> {row[0]} </td>
                                <td key={i+1}> {row[1]} </td>
                                <td key={i+2}> {row[2]} </td>
                            </tr>
                        ))}
                    </table>                     
                </div>
            </Popup>
        </div>
    )
}

export default Mkd;