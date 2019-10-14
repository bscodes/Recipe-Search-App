import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard  = ({key, title, calories, image, ingredients, source, details}) => {
    return(
        
        <div className="col-md-4 mb-2" key={key}>
            <div className="card">
                <Link to={{ pathname: `/recipe/${key}` /* değişecek bura */}} className="recipe-card">
                    <img className="card-img-top" src={image} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"> Calories: {calories.toFixed(1)}</p>
                    </div>
                </Link>
            </div>
        </div>
        
    );
}

export default RecipeCard;