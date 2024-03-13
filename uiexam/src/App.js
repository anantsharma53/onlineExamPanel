import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/home/home';
import ExamPanal from './components/exampanal/exampanal';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      < Route path='/exampalan' element={<ExamPanal/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
