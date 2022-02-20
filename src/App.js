import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import './styles/App.scss'
import Layout from "./components/Layout";
import ForRestoran from "./pages/ForRestoran";
import ForCurier from "./pages/ForCurier";
import Pres from "./pages/Pres";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Router> {/* структура страниц */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='restaurant/:id' element={<Restaurant />} />
            <Route path="for-restoran" element={<ForRestoran />} />
            <Route path="for-curier" element={<ForCurier />} />
            <Route path="pres" element={<Pres />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
