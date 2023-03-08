import { useState,useEffect } from "react";
import {getToken} from "./utils/api";
import jwt_decode from "jwt-decode";

// == Import page
import "./styles/_reset.css"
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

import Homepage from "./pages/HomePage";
import Signup from "./pages/SignUp/SignUp";
import Recipe from "./pages/Recipe";
import SignIn from "./pages/SignIn";
import CreateRecipe from "./pages/CreateRecipe";
import UpdateRecipe from  "./pages/UpdateRecipe";
import AllRecipes from "./pages/AllRecipes";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import CGU from "./pages/CGU";

// Import React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";



// == Composant
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(null);
  useEffect(()=>{
    let token = getToken()
    if(token && typeof token == "string"){
      let body = token.split(".")[1]
      let decrypted=JSON.parse(atob(body))
      if(decrypted.exp*1000 > Date.now){
        console.log("token is expired, we don't log user. ");
      }else{
        console.log("token valid, we should log user. ")
        setIsLogged(true);
        setToken(token);
      }
    }
  },[])
  console.log(isLogged, "isLoggedFromHome? ")
  return (
    <>
      <Router>
      <AppHeader isLogged={isLogged} setIsLogged={setIsLogged} />
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn setIsLogged={setIsLogged}/>} />
          <Route path="/recipes/create" element={<CreateRecipe />} />
          <Route path="/*" element={<Error />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/CGU" element={<CGU />} />
          <Route path="/recipes/update/:id" element={<UpdateRecipe />} />
        </Routes>
      <AppFooter />
      </Router>

    </>
  );
};

// == Export
export default App;
