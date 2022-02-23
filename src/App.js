import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Stages from './Pages/Stages';
import Veille from './Pages/Veille';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='dark' />
      <Navbar />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;