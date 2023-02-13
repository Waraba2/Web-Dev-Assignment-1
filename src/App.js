
import './App.css';
import {Home, Page2, Page3} from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/page3" element={<Page3/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
