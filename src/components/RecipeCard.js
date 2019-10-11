import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard  = ({key, title, calories, image, ingredients, source, details}) => {
    return(
        
        <div className="col-md-6" key={key}>
            <Link to="/recipe">
                <h1>{title}</h1>
            </Link>  
            <Link to="/recipe">  
                <img src={image} alt=""/>
                
            </Link>
        </div>
        
    );
}

export default RecipeCard;