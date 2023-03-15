import React from 'react';

const InfoCard = ({card}) => {
    const {name, discription, icon, bgColor} = card

    return (
        <div className={`card p-6 text-white md:card-side shadow-xl ${bgColor}`}>
            <figure>
                <img src={icon} alt="Movie" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;