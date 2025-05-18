import "./App.css";
import Header from "./component/Header/Header";
import About from "./component/Main/about/About";
import BackToTop from "./component/Main/BackToTop/BackToTop";
import Blog from "./component/Main/Blog/Blog";
import Category from "./component/Main/Category/Category";
import Contact from "./component/Main/Contact/Contact";
import CarouselWrapper from "./component/Main/Courses/CarouselWrapper";
import Courses from "./component/Main/Courses/Courses";
import Footer from "./component/Main/Footer/Footer";
import Hero from "./component/Main/Hero/Hero";
import State from "./component/Main/State/State";
import Video from "./component/Main/Video/Video";


function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <Category />
          <About />
          <Courses />
          <Video />
          <State />
          {/* <Blog /> */}
          <Contact/>
          <Footer />
          <BackToTop />
        </article>
      </main>
    </>
  );
}

export default App;
