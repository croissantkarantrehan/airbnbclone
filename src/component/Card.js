import React from 'react'
export default function Card( props)
{
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        
        <div className="card">
            {badgeText && <div className='card--badge'>{ badgeText}</div>}
            <img src={`../image/${props.item.coverImg}`}alt="onehello" className="card-image"></img>
            <div className="card-stats">
                <img src="./image/star.png" alt="star" className="card--stars"></img>
                <span > ({props.item.stats.rating}).</span>
                <span className='gray'>({props.item.stats.reviewCount} )</span>
                <span className='gray'>{ props.item.location} </span>
            </div>
            <p className='title'>{ props.item.title}</p>
<p className='para'><span className="bold">From ${props.item.price}</span>/ person</p>
        </div>
        
    )
}
//{require(`${ props.img }`)}