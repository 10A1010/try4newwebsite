import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Quranin from "./pages/Quranin";
import TafsiirUmal from "./pages/tafsiir/tafsiirUmal";
import TafsiirFarooq from "./pages/tafsiir/tafsiirFarooq";
import TafsiirAli from "./pages/tafsiir/tafsiirAli";

// import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        {/* <Route path='/signin' element={<SigninPage />} exact /> */}
        <Route path='/quranin' element={<Quranin />} exact />
        <Route path='/tafsiirUmal' element={<TafsiirUmal />} exact />
        <Route path='/tafsiirFarooq' element={<TafsiirFarooq />} exact />
        <Route path='/tafsiirAli' element={<TafsiirAli />} exact />

      </Routes>
    </Router>
  );
}

export default App;
