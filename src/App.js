import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Sider from './components/Sider'
import MainContainer from './components/MainContainer';
import {isMobile} from 'react-device-detect';
import ListPartners from './components/ListPartners'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {!isMobile ?
        <div className="container-fluid main-offset">
        <div className="row">
          <Sider />
          <Route path="/partners/:id">
            <MainContainer />
          </Route>
        </div>
      </div>
      : <div className="container-md main-offset bg-light py-3"> 
        {/* <ListPartners /> */}
        <Switch>
          <Route exact path="/">
            <ListPartners />
          </Route>
          <Route path="/partners/:id">
            <MainContainer />
          </Route>
        </Switch>
      </div>}
      </div>
    </Router>
    
  );
}

export default App;
