import './App.css';
import { BrowserRouter} from 'react-router-dom';
import {Footer,Header} from './components/index'
import Router from './Router'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Router/>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
