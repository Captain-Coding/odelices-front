import { useState } from "react";
// == Import page
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Homepage from "./pages/HomePage";
import Signup from "./pages/SignUp/SignUp";
import "./pages/Recipe";
import "./pages/SignIn";
import "./pages/CreateRecipe";
// import "./pages/UpdateRecipe";
// import "./pages/Recipes";
import "./pages/Profile";
// import "./pages/Error";
// import "./pages/SearchRecipes";
// import "./pages/CGU";

// Import Components
import Recipe from "./components/Recipe";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import CreateRecipe from "./components/CreateRecipe";

// Import React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// == Composant
const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <AppHeader isLogged={isLogged} setIsLogged={setIsLogged} />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/recipe/create" element={<CreateRecipe />} />
          {/*         
            <Route path="/recipe/update/:id" element={<UpdateRecipe />} />
            <Route path="/recipes" element={<AllRecipes />} />
            <Route path="/recipes/search" element={<FoundRecipes />} />
            <Route path="*" element={<Error />} />
            <Route path="/CGU" element={<CGU />} /> */}
        </Routes>
      </Router>

      <AppFooter />
    </>
  );
};

// == Export
export default App;
