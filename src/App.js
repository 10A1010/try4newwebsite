import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Quranin from "./pages/Quranin";
import TafsiirUmal from "./pages/tafsiir/tafsiirUmal";
import TafsiirFarooq from "./pages/tafsiir/tafsiirFarooq";
import TafsiirAli from "./pages/tafsiir/tafsiirAli";
import HadithBukhari from "./pages/hadith/hadithBukhari"
import HadithMuslim from "./pages/hadith/hadithMuslim"
import HadithTirmidi from "./pages/hadith/hadithTirmidi"
import BookAM from "./pages/books/bookAM"
import BookBM from "./pages/books/bookBM"
import BookRS from "./pages/books/bookRS"

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
        <Route path='/hadithBukhari' element={<HadithBukhari />} exact />
        <Route path='/hadithMuslim' element={<HadithMuslim />} exact />
        <Route path='/hadithTirmidi' element={<HadithTirmidi />} exact />
        <Route path='/bookAM' element={<BookAM />} exact />
        <Route path='/bookBM' element={<BookBM />} exact />
        <Route path='/bookRS' element={<BookRS />} exact />

      </Routes>
    </Router>
  );
}

export default App;
