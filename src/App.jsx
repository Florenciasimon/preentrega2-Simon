import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import './App.css';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path= "/" element={<ItemListContainer />} />
        <Route path= "/category/:id" element={<ItemListContainer />} />
        <Route path= "/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App