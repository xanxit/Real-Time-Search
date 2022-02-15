import React from 'react';
import './App.css';

const Beer = ({beer}) => {
    return (
        <div className='beer-container'>
          <p className="beer">
            "{beer.name}"
          </p>
          <p className="beer-author">
            Tagline 
            <span className='highlight'> {beer.tagline }</span>
            from
            <span className='highlight'> {beer.contributed_by}</span>
          </p>
        </div>
      );
};

export default Beer;