import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home/home"
import Form from "../src/pages/Form/form"
import DashboardPage from './pages/Dashboard/dashboard';
import ConscientizacaoPage from './pages/Conscientizacao/conscientizacao';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/conscientizacao' element={<ConscientizacaoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
 