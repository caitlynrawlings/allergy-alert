import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AllergyList from './AllergyList';

function App() {
  const [results, setResults] = useState("");

  // Parameter: query - recipe name to be fetched from database
  // Description: uses fetch on the given recipe name (user input)
  //              and then updates state.results
  const fetchRecipe = query => {
    // Fetch res as a json() and then retrieve the .message object
    fetch("http://localhost:5000/api/v1/recipes?name=\"" + query + "\"") // backend URI
      .then((res) => res.json())
      .then((data) => {
        // data is a JSON object with all recipes
        // for the beta, we will display the top 10 results
        let ten_results = [];

        data["recipes"].forEach((recipe, index) => {
          if (index >= 10) {
            return;
          }
          
          ten_results.push(recipeToString(recipe));
        });

        setResults(ten_results.join("\n\n"));
      })
  }

  // Parameter: recipe - object containing recipe data
  // Description: formats recipe into a readable string output
  const recipeToString = recipe => {
    // Total number of recipes for this food
    const recipeTotal = recipe["Total"];

    // Get ingredient names and counts (remove first and last elements)
    const ingredientNames = Object.keys(recipe).slice(1, -2);
    const ingredientCounts = Object.values(recipe).slice(1, -2);

    // Evaluate occurrence % for each ingredient; store as strings
    const ingredientPercentages = []

    for (let i = 0; i < ingredientNames.length; i++) {
      ingredientPercentages.push(`${ingredientNames[i]} - ${((ingredientCounts[i] / recipeTotal) * 100).toFixed(1)}%`)
    }

    return (`${recipe["Name"]}:\nIngredients:\n${ingredientPercentages.join("\n")}`)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="logo-text">Allergy Alert</h2>
      </header>
      <main>
        <section>
          <h3>About Allergy Alert</h3>
          <p>
            Allergy Alert allows users to quickly find recipes and foods which contain their allergies and which don't,
            allowing for faster access to appropriate foods to enjoy anytime, anywhere.
          </p>
        </section>
        <section>
          <AllergyList/>
          <SearchBar placeholder="🔍 Recipe" emitSearchIntent={query => fetchRecipe(query)} />
          <div style={{whiteSpace: "pre-line", paddingLeft: "2rem"}}>{results}</div>
        </section>
      </main>
    </div>
  );
}

export default App;