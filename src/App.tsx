import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contactus from "./Components/Contact Us/Contactus";
import Countries from "./Components/Countries/Countries";
import NavigatorBar from "./Components/NavigationBar/NavigatorBar";
import ThanksPage from "./Components/Contact Us/ThanksPage";
import CountryDetails from "./Components/Countries/CountryDetails";
import { RootState } from "./Reducers/index";
import Update from "./Components/Update/Update";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  let select = useSelector((state: RootState) => {
    return state.contact;
  });

  useEffect(() => {
    setData(select);
  }, [data]);

  console.log(data, "data");
  // const [isLogin, setIsLogin] = useState(null)

  // useEffect(()=>{
  //   const checkLogin = localStorage.getItem("isLogin")
  //   checkLogin && JSON.parse(checkLogin) ? setIsLogin(true):setIsLogin(false)
  // },[])

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
