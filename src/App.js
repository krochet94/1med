import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
