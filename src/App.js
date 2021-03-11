import { useReducer } from 'react';

import './App.css';

import NameForm from './comps/NameForm';
import GithubCard from './comps/GithubCard';

import { AutoForm } from './store';

function App() {
  const [state, dispatch] = useReducer(AutoForm.reducer, AutoForm.initialState);
  return (
    <div className="App container">
      <AutoForm.DispatchContext.Provider value={dispatch}>
        <AutoForm.StateContext.Provider value={state}>
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
        </AutoForm.StateContext.Provider>
      </AutoForm.DispatchContext.Provider>
    </div>
  );
}

export default App;
