import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Footer,Header} from './components/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
