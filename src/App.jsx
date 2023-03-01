import { useState } from "react";
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



// == Composant
const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Router>
      <AppHeader isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/recipe/create" element={<CreateRecipe />} />
          <Route path="/*" element={<Error />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/CGU" element={<CGU />} />
          <Route path="/recipe/update/:id" element={<UpdateRecipe />} />
        </Routes>
      <AppFooter />
      </Router>

    </>
  );
};

// == Export
export default App;
