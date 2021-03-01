import { useState, useEffect, useContext} from 'react';
import Context from './AppContext.js';

import './App.css';

import NameForm from './comps/NameForm';
import GithubCard from './comps/GithubCard';

function App() {
  const [visible, setVisibility] = useState(false);
  const [form, setForm] = useState({ name: '' });
  return (
    <div className="App">
      <Context.Form.Provider value={[form, setForm]}>
        <header>
          <NameForm />
        </header>
        <main>
          <GithubCard />
        </main>
      </Context.Form.Provider>
    </div>
  );
}

export default App;
