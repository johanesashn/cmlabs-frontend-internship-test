import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Primary from "./components/Primary"
import Content from "./components/Content"

export default function App(){
  const food = ""
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Primary/>}/>
        <Route path="content/:food" food={food} element={<Content/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  )
}