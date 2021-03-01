import { useState} from 'react';
import Context from './AppContext.js';

import './App.css';

import NameForm from './comps/NameForm';
import GithubCard from './comps/GithubCard';

function App() {
  const [userData, setUserData] = useState({ message: 'Nothing to show...' });
  return (
    <div className="App container">
      <Context.Form.Provider value={[userData, setUserData]}>
        <div className="row">
          <div className="col" />
          <div className="col-6">
            <NameForm />
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="col" />
          <div className="col-6">
            <GithubCard />
          </div>
          <div className="col" />
        </div>
      </Context.Form.Provider>
    </div>
  );
}

export default App;
