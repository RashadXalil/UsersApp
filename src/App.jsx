import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/home/home'
import About from './pages/about/About'
import Users from './pages/users/Users'
import Add from './pages/users/add/Add'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
