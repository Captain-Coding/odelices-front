import { NavLink  } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Navbar = ({token}) => {
  //je  suprime le token du localStorage
  const deleteToken = () =>{
    localStorage.removeItem('token')
  }
  // lien de menu .. 
  const liens= [
    {
      url: "/",
      name: "home"
    }, {
      url: "/recipes",
      name: "recettes"
    },
    {
      url: "/signin",
      name: "connections"
    },
    {
      url: "/signup",
      name: "S'incrire"
    },
  ]
  return (
    <>
      {/* Si nous avons des liens :  */}
      {liens &&
      // alors on afiche la nav ... 
        <nav>
          <ul>
            {/* on boucle sur la liste de liens avec map .  */}
            {/* si nous avons un token et le lien.name est "connections on replace l'entrée de la nav ... " */}
            {liens.map((lien) => 
              (token && lien.name == "connections") //condition de la ternaire ... 
              ?<li key={"logout"}><div className='logout' onClick={()=>deleteToken()}>Logout</div></li> //la ternaire retrourne true.  
              // je fait les liens et passe a navlink l'url du lien ansi que la classe isActive (natif de navlink)  
              :<li key={lien.name}>
              <NavLink to={lien.url} 
              className={({ isActive}) => `nav-link${isActive? 'menu-link--selected':''}`}>{lien.name}</NavLink> </li> // la ternaire retrourne false. 
              )}
          </ul>
        </nav>
      }
    </>
  )
};
export default Navbar;