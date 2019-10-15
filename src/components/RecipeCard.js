import React from 'react'

const RecipeCard  = ({key, title, calories, image, source, details, healthLabels}) => {
    return(
        
        <div className="col-md-4 mb-4" key={key}>
            <div className="card">
                <a href={details} target="_blank" rel="noopener noreferrer" className="recipe-card">
                    <img className="card-img-top" src={image} alt=""/>
                    <div className="card-body text-left">
                        <div className="info">
                            <p className="card-text"> <i className="fas fa-fire"></i> {calories.toFixed(1)}</p>
                            <div className="card-text"> 
                            {healthLabels[0]} 
                            </div>
                            <i className="source">{source}</i>
                        </div>
                        <h5 className="card-title">{title}</h5>
                    </div>
                </a>
            </div>
        </div>
        
    );
}

export default RecipeCard;