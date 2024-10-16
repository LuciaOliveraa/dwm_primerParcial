import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Home } from './Pages/Home';
import { RecipeDetails } from './Pages/RecipeDetails';

function App() {
  // Loading recipes.
  const [recipes, setRecipes] = useState([]);
  console.log("recipes:", recipes);

  async function fetchRecipes() {
      try {
      const url = "http://localhost:3000/dishes"
      const response = await fetch(url, { method: "GET" });
      const data = await response.json(); // extract JSON from response
      setRecipes(data);
      } catch (error) {
      console.log("Error fetching data: ", error);
      }
  }

  useEffect(() => {
    fetchRecipes();
  }, [])

  // Adding new recipe.
  async function postRecipe(recipe) {
      try {
          const url = "http://localhost:3000/dishes"
          const response = await fetch(url, { 
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe
            ) });
          const data = await response.json(); // extract JSON from response
          console.log("post:" , data);
          setRecipes([...recipes, data]);
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
  }

  // Deleting recipe.
  async function deleteRecipe(id) {
      try {
        const url = `http://localhost:3000/dishes/${id}`
        await fetch(url, { 
          method: "DELETE",
          headers: {
            "Content-Type":"application/json"
          },
        });
        setRecipes([...recipes.filter(recipe => recipe.id !== id)]);
        //fetchRecipes();
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
  }

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home recipes={recipes} postRecipe={postRecipe} deleteRecipe={deleteRecipe}> </Home>} />
          <Route path="/dishes/:id" element={<RecipeDetails />}/>
        </Routes>
      </div>
    </Router>
      
  )
}

// npm run install
// npm run start
// >> para backend

// para hacer mas responsive en casos borde:
// @media only screen and { código css }

export default App
