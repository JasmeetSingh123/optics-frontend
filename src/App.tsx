import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import Navigation from "./navigation";

import './App.scss';


function App() {
  return (
    <Provider store={store} >
      <div className="App w-full h-full">
        <Router>
          <Navigation />
        </Router>
      </div>
    </Provider>
  )
};


export default App;

