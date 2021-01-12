import { BrowserRouter as Router, Switch, Route
      } from "react-router-dom";
import {MdComputer}  from 'react-icons/md'
import './theme/App.css';
import Mkd from './Mkd'
import Home from './Home'

function App() {
  return (
    <div>
      <header className="App-header">
        <MdComputer className="App-logo" />
        <p style={{paddingLeft: '13vw', paddingRight: '13vw', textAlign: 'center'}}>
           Καλως ήρθατε στην εκμάθηση αλγορίθμων γ' λυκείου.
        </p>
      </header>
      <Router>
        <Switch>
          <Route path='/mkd'>
            <Mkd/>
          </Route>    
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>          
      </Router>    
    </div>
  );
}

export default App;
