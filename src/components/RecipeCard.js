import React from 'react'

const RecipeCard  = ({key, title, calories, image, source, details}) => {
    return(
        
        <div className="col-md-4 mb-2" key={key}>
            <div className="card">
                <a href={details} target="_blank" rel="noopener noreferrer" className="recipe-card">
                    <img className="card-img-top" src={image} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <i>{source}</i>
                        <p className="card-text"> Calories: {calories.toFixed(1)}</p>
                        <div>
                            
                        </div>
                    </div>
                </a>
            </div>
        </div>
        
    );
}

export default RecipeCard;