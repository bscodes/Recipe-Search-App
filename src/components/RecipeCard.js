import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard  = ({key, title, calories, image, ingredients, source, details}) => {
    return(
        
        <div className="col-md-3 mb-2" key={key}>
            <div className="card">
                <Link to={`/recipe`} className="recipe-card">
                    <img className="card-img-top" src={image} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </Link>
            </div>
        </div>
        
    );
}

export default RecipeCard;