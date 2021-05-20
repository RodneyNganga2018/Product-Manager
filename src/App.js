import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='product/'/>
        <Detail path='product/:id'/>
      </Router>
    </div>
  );
}

export default App;
