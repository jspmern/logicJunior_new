
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Routes location={location}>
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
          <Route path="*" element={<><NotFound /><Footer /><BackToTop /></>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "linear-gradient(120deg, #2ec4b6 0%, #b388ff 100%)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "220px" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              style={{
                height: "6px",
                background: "#fff",
                borderRadius: "3px",
                marginBottom: "32px"
              }}
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ color: "#fff", fontWeight: 700, fontSize: "2.2rem", letterSpacing: 1 }}
            >
              Welcome to Logic Junior
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <Router>
          <ScrollToTop />
          <Header />
          <main>
            <AnimatedRoutes />
          </main>
        </Router>
      )}
    </>
  );
}

export default App;
