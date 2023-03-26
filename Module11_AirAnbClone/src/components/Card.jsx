
import starpic from "../assets/star.png"
import React, { useState, useEffect } from 'react';
function Card (props) {
    const [imageSrc, setImageSrc] = useState(null);
   
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    useEffect(() => {
        import(`../assets/${props.coverImg}`).then((module) => {
          setImageSrc(module.default);
        });
      }, [props.coverImg]);

    return (
        <div className="card">
                    {
                        badgeText && 
                        <div className="card--badge">{badgeText}</div>
                    }
                     <img src={imageSrc}
                        className="card--image" 
                    />
                    <div className="card--stats">
                        <img src={starpic} className="card--star" />
                        <span>{props.stats.rating}</span>
                        <span className="gray">({props.stats.reviewCount}) • </span>
                        <span className="gray">{props.location}</span>
                    </div>
                    <p className="card--title">{props.title}</p>
                    <p className="card--price">
                        <span className="bold">From ${props.price}</span> / person
                    </p>
                </div>
    )
}

export default Card