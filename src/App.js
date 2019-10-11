import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeCard from './components/RecipeCard';

const App = () => {
    const APP_ID = '43db497e';
    const APP_KEY = '3887402edde7dc141cf655aba2173de2';
    // all of the recipes are in this state
    const [recipes, setRecipes] = useState([])
    // a state for search 
    const [search, setSearch] = useState('')
    // a state for 
    const [query, setQuery] = useState('salad') 

    useEffect( () => {
        getRecipes();
        // eslint-disable-next-line
    }, [query]);

    const getRecipes = async () => {
        // once response comes back, we gonna fetch 
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        // and once it comes back, format the data 
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    // get searched name from value of textInput
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    // get searched item from our data on the form is submitted
    const getSearch = e => {
        // stop refresh
        e.preventDefault()
        setQuery(search)
        // clear the textInput after the search is done
        setSearch('')
    }
    return (
        <div className="App">
            <HashRouter basename="/">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group mt-5 mb-5">
                                <form onSubmit = {getSearch}>
                                    <div className="input-group">
                                        <i className="fas fa-search"></i>
                                        <input type="text" className="form-control" value={search} onChange={updateSearch} placeholder="Find a recipe"/>
                                        {/* <button type="submit" className="btn btn-primary">Search</button> */}
                                    </div>
                                </form>
                                <div className="input-title text-left mt-5 ml-3">
                                    <h2 className="input-title-text">
                                    Healthy food for your lifesyle
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {
                                    recipes.map(recipe => (
                                        <Switch>
                                            <Route 
                                                exact path = "/" 
                                                render={(props) => 
                                                <RecipeCard 
                                                    {...props} 
                                                    key={recipe.recipe.label} 
                                                    title = {recipe.recipe.label} 
                                                    calories = {recipe.recipe.calories} 
                                                    image = {recipe.recipe.image} 
                                                    ingredients = {recipe.recipe.ingredients}
                                                    source = {recipe.recipe.source}
                                                    details = {recipe.recipe.url} 
                                                />}
                                            />
                                        </Switch>
                                        /* <RecipeCard 
                                            key={recipe.recipe.url} 
                                            title = {recipe.recipe.label} 
                                            calories = {recipe.recipe.calories} 
                                            image = {recipe.recipe.image} 
                                            ingredients = {recipe.recipe.ingredients}
                                            source = {recipe.recipe.source}
                                            details = {recipe.recipe.url}
                                        /> */
                                        
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
