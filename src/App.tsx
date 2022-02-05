import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contactus from "./Components/Contact Us/Contactus";
import Countries from "./Components/Countries/Countries";
import NavigatorBar from "./Components/NavigationBar/NavigatorBar";
import ThanksPage from "./Components/Contact Us/ThanksPage";
import CountryDetails from "./Components/Countries/CountryDetails";
import Update from "./Components/Update/Update";

function App() {

  return (
    <div className="">
      <NavigatorBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/alldetails/:id" element={<CountryDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/countries/update/:id" element={<Update />} />
        <Route path="/contactus/thanks" element={<ThanksPage />} />
      </Routes>
    </div>
  );
}

export default App;
