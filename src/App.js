
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import About from "./component/Main/about/About";
import BackToTop from "./component/Main/BackToTop/BackToTop";
import Blog from "./component/Main/Blog/Blog";
import Category from "./component/Main/Category/Category";
import Contact from "./component/Main/Contact/Contact";
import Courses from "./component/Main/Courses/Courses";
import CourseDetails from "./component/Main/Courses/CourseDetails";
import Footer from "./component/Main/Footer/Footer";
import PuzzleGamePage from "./component/Main/PuzzleGamePage";
import Hero from "./component/Main/Hero/Hero";
import State from "./component/Main/State/State";
import Video from "./component/Main/Video/Video";
import NotFound from "./component/Main/NotFound/NotFound";
import TestSeries from "./component/Main/TestSeries/TestSeries";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <article>
                <Hero />
                <Category />
                <About />
                <Courses />
                <Video />
                <State />
                <Contact />
                <Footer />
                <BackToTop />
              </article>
            }
          />
          <Route path="/about" element={<><About /><Footer /><BackToTop /></>} />
          <Route path="/courses" element={<><Courses /><Footer /><BackToTop /></>} />
          <Route path="/courses/:courseId" element={<><CourseDetails /><Footer /><BackToTop /></>} />
          {/* <Route path="/blog" element={<><Blog /><Footer /><BackToTop /></>} /> */}
          <Route path="/testseries" element={<><TestSeries /><Footer /><BackToTop /></>} />
          <Route path="/contact" element={<><Contact /><Footer /><BackToTop /></>} />
          <Route path="/games/puzzle" element={<><PuzzleGamePage /><Footer /><BackToTop /></>} />
          <Route path="*" element={<><NotFound /><Footer /><BackToTop /></>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
