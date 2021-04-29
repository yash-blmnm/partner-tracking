import Header from './components/Header'
import {isMobile} from 'react-device-detect';
import { BrowserRouter as Router} from "react-router-dom";
import MobileView from './components/MobileView';
import WindowView from './components/WindowView';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {!isMobile ?
          <WindowView />
        : 
          <MobileView />
        }
      </div>
    </Router>
    
  );
}

export default App;
