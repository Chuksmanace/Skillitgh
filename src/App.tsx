import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/NavBar.tsx";
import HomePage from "./Pages/HomePage.tsx";
// import AboutPage from "./Pages/AboutPage.tsx";
// import CoursesPage from "./Pages/CoursesPage.tsx";
// import ContactPage from "./Pages/ContactPage.tsx";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import ExploreCourses from "./Components/ExploreCourses.tsx";

function App() {
  return (
    <Router>
        <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          {/* <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/CoursesPage" element={<CoursesPage />} />
          <Route path="/ContactPage" element={<ContactPage />} /> */}
        </Routes>
      </main>
      <ExploreCourses />
      <Footer />
    </Router>
  );
}

export default App;
