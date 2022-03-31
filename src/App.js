import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CardDetails from './components/CardDetails/CardDetails';
import Feed from './components/Feed/Feed';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<Feed />} />
    <Route exact
    path='/card-details'
    element={<CardDetails />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;
