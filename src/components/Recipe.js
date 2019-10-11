import React from 'react'

const Recipe  = ({title, calories, image, ingredients, source, details}) => {
    return(
        <div className="col-md-6">
            <h1>{title}</h1>
            <ol>
                {
                    ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
                }
            </ol>
            <p>Calories: {calories}</p>
            <img src={image} alt=""/>
            <p><a href={details} target="_blank" rel="noopener noreferrer">View Details on {source} </a></p>
        </div>  
    );
}

export default Recipe;