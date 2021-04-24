import React from 'react';
import Images from './Images';


const Card = (props) => {
    return (
        <>
            <div className="card_list">
                <div className="card">
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <p>{props.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Card;