import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home/home"
import Form from "../src/pages/Form/form"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
 