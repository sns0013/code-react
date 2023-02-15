//router
import IndexRouters from "./router/index"

//scss
import "./assets/scss/electnow.scss"

import { Provider } from 'react-redux';
//reducer
import Store from './store'

function App() {
  return (

    <div className="App">
      <IndexRouters />
    </div>
  );
}

export default App;
