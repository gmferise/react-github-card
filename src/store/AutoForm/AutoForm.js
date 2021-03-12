import { createContext } from 'react';

const StateContext = createContext({});
const DispatchContext = createContext(() => {});

const initialState = {
  visible: false,
  result: {},
  search: '',
  suggestions: [],
};

const actions = {
  TOGGLE: 'TOGGLE',
  SUGGEST: 'SUGGEST',
  SUBMIT: 'SUBMIT',
  CLEAR: 'CLEAR',
};

// Reusable error handling
const payloadMust = (state, action, ...requirements) => {
  requirements.forEach((req) => {
    req(action, state);
  });
};

// Requirements to handle errors for
const reqs = {
  exist: (action) => {
    if (typeof action.payload === 'undefined')
      throw new Error(`Cannot dispatch "${action.type}" without payload`);
  },
  beObject: (action) => {
    if (!(action.payload instanceof Object))
      throw new Error(`Cannot dispatch "${action.type}" without Object payload (Got "${typeof action.payload}")`);
  },
  beArray: (action) => {
    if (!(action.payload instanceof Array))
      throw new Error(`Cannot dispatch "${action.type}" without Array payload (Got "${typeof action.payload}")`);
  },
  haveSearch: (action) => {
    if (!(action.payload.hasOwnProperty('search')))
      throw new Error(`Cannot dispatch "${action.type}" without payload property "search"`);
  },
  haveSuggestions: (action) => {
    if (!(action.payload.hasOwnProperty('suggestions')))
      throw new Error(`Cannot dispatch "${action.type}" without payload property "suggestions"`);
    if (!(action.payload.suggestions instanceof Array))
      throw new Error(`Cannot dispatch "${action.type}" without Array payload property "suggestions" (Got "${typeof action.payload.suggestions}")`);
  },
  // Could write more here
};

const reducer = (state, action) => {
  switch (action.type) {
    // Toggle visibility
    case actions.TOGGLE:
      return {
        ...state,
        visible: !state.visible,
      };

    // Update the search suggestions
    case actions.SUGGEST:
      payloadMust(state, action,
        reqs.exist,
        reqs.beObject,
        reqs.haveSearch,
        reqs.haveSuggestions,
      );
      return {
        ...state,
        search: action.payload.search,
        suggestions: action.payload.suggestions,
      };

    // Update the search result
    case actions.SUBMIT:
      payloadMust(state, action,
        reqs.exist,
        reqs.beObject,
      );
      return {
        ...state,
        search: '',
        suggestions: [],
        result: action.payload,
        visible: true,
      };

    case actions.CLEAR:
      return {
        ...state,
        suggestions: [],
      };

    // Unknown action
    default:
      throw new Error(`Failed to dispatch unknown action "${action.type}"`);
  }
};

const AutoForm = {
  StateContext,
  DispatchContext,
  reducer,
  initialState,
  ...actions,
};

export default AutoForm;