import React, { useState, useEffect } from 'react';

function Hero (props){


return (
<div className="travelContainer">
            <img className="picture" src={props.imageUrl}/>
            <div className="descriptionContainer">
                    <div className="mapContainer">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className='locationCountry'>{props.location}</p>
                        <a className="mapLink" href={props.googleMapsUrl}>  View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p className="dateContainer">{props.startDate} - {props.endDate}</p>
                    <p className="aboutContainer">{props.description}</p>       
                </div>
         </div> 
         )}

         export default Hero