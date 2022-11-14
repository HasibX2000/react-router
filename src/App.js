import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Error from './Components/Error'
import Nav from './Components/Nav'
import BlogPost from './Components/BlogPost'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:title" element={<BlogPost />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
