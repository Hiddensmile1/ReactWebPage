import "./App.css"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Courses from "./components/Courses/Courses";
import Explore from "./components/Explore/Explore";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Courses />
      <Explore />
    </div>
  )
}

export default App