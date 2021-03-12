import { useReducer } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
            <div className="col-6">
              <NameForm />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Card>
                <div className="text-center">
                    <Button className="mt-2 mb-1" variant="secondary" type="button" onClick={() => dispatch({ type: AutoForm.TOGGLE })}>
                      {state.visible ? 'Hide' : 'Show'}
                    </Button>
                  </div>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              {
                state.visible ? (
                  <GithubCard result={state.result} />
                ) : ''
              }
            </div>
          </div>
        </AutoForm.StateContext.Provider>
      </AutoForm.DispatchContext.Provider>
    </div>
  );
}

export default App;
