import React, {createContext, useReducer} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Home from './Home';

const Context = createContext();

const reducer = (state, action) => {
  let dup_state = {...state};
  if(action.type === "logout"){
    dup_state["isLoggedIn"] = false;
  }
  return dup_state;
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, {isLoggedIn: true});
  
  const logOut = () => {
    dispatch({type: "logout"});
  }
  
  return (
    <>
      <Context.Provider value={{data, logOut}}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
export { Context };