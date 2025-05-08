import "./App.css"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Explore from "./components/Explore/Explore";
import Courses from "./components/Courses/Courses";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Explore />
      <Courses />
    </div>
  )
}

export default App