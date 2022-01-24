import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Contactus from './Components/Contact Us/Contactus';
import Countries from './Components/Countries/Countries';
import NavigatorBar from './Components/NavigationBar/NavigatorBar';
import ThanksPage from './Components/Contact Us/ThanksPage';
import CountryDetails from './Components/Countries/CountryDetails';
import { RootState } from './Reducers/index'
import Update from './Components/Update/Update';



function App() {

  const thanks  = useSelector((state: RootState) => {
    return state.contact.contact_data;
  });
  
  console.log(thanks,"thanks")
  return (
    <div className="">
      <NavigatorBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/alldetails/:id" element={<CountryDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/contactus/thanks" element={<ThanksPage />} />
        <Route path="/countries/update/:id" element={<Update />}/>
      </Routes>

    </div>
  );
}

export default App;
