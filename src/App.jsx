import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Primary from "./components/Primary"
import Content from "./components/Content"
import Splash from "./components/Splash"
import Recipe from "./components/Recipe"

export default function App(){
  const food = ""
  const foodId = ""

  return (
    <BrowserRouter>
      <Splash/>
      <Routes>
        <Route path="/" element={<Primary/>}/>
        <Route path="content/:food" food={food} element={<Content/>}/>
        <Route path="recipe/:foodId" foodId={foodId} element={<Recipe/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  )
}