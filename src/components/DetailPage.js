import React from 'react';
import './App.css';


const DetailPage = ({title, calories, image, ingredients, source, details}) => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>{title}</p>
                    <ol>
                        {
                            ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))
                        }
                    </ol>
                    <p>Calories: {calories}</p>
                    <img src={image} alt=""/>
                    <p>
                        <a 
                            href={details} 
                            target="_blank" 
                            rel="noopener noreferrer">
                                View Details on {source} 
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailPage