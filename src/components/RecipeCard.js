import React from 'react'
import Popup from "reactjs-popup"

const RecipeCard  = ({key, title, calories, image, source, details, healthLabels, ingredients}) => {
    return(
        
        <div className="col-md-4 col-sm-6 mb-4" key={key}>
            <div className="card">
                <a href={details} target="_blank" rel="noopener noreferrer" className="recipe-card">
                    <img className="card-img-top" src={image} alt=""/>
                    <div className="card-body text-left">
                        <div className="info">
                            <p className="card-text"> <i className="fas fa-fire"></i> {calories.toFixed(1)} kCal</p>
                            <div className="card-text"> 
                             {healthLabels[0]} 
                            </div>
                            <i className="source">{source}</i>
                        </div>
                        <div className="card-title">
                        <h5>{title}</h5>
                        </div>
                    </div>
                </a>
                <Popup 
                trigger = {<button className="btn info-btn"> <i className="fas fa-info-circle"></i> </button>} position="bottom left">
                    <div className="ingredients-popup">
                    <p>Ingredients </p>
                    <hr/>
                    <div>
                        {
                            ingredients.map(ingredient => (
                                <li><i>{ingredient.text}</i></li>
                            ))
                        }
                    </div>
                    <hr/>
                    <a href={details} target="_blank" rel="noopener noreferrer">
                        <div className="details-link">
                                <i class="fas fa-arrow-right"></i> Get details
                        </div>
                    </a>
                    </div>
                </Popup>
            </div>
        </div>
        
    );
}

export default RecipeCard;