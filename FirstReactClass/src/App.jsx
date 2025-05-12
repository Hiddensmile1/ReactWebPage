import "./App.css"
import Home from "./page/Home/home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Services from "./page/Services/services";
import About from "./page/About/about";
import Contact from "./page/Contact/contact";
import Blog from "./page/Blog/blog";
import Header from "./components/Header/Header";

// import Header from "./components/Header/Header"
// import Hero from "./components/Hero/Hero";
// import Content from "./components/Content/Content";
// import Explore from "./components/Explore/Explore";
// 

const App = () => {
  const user = {
    userName:"seniordev",
    stack:"front end"
  }
  return (
    <div>
      <BrowserRouter>
      <Header userData={user}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
      </BrowserRouter>



      {/* <Header />
      <Hero />
      <Content />
      <Explore />
      <Courses /> */}
    </div>
  )

}
export default App