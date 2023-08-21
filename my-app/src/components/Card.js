import React from "react";

export default function Card(prosp)
{
    let badgeText;
    if(prosp.openSpot === 0)
    {
        badgeText="Sold Out"
    }
    else if(prosp.location === "online")
    {
        badgeText= "online";
    }
    else(
        badgeText=(prosp.location)
    )
    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="card-img" src={prosp.img} />
        <div className="star">
        <span><img className="card-star" src="./images/star.jpeg" /></span>
         <span> {prosp.age}</span>
         <span> {prosp.location}</span>
         </div>
        <div>{prosp.email} </div>
        </div>
    )
}