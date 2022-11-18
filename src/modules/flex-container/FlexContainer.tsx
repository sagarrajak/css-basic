import React from 'react'
import './FlexContainer.css';

export const FlexContainer = () => {
    return (
        <div className="flex-container">
            <div className="item-1">div</div>
            <div className="item-2">w=250px</div>
            <div className="item-3">h=250px</div>
            <div className="item-4">w/h=300px</div>
            <div className="item-5">w=350px</div>
            <div className="item-6">w=350px</div>
        </div>
    )
}

export default FlexContainer;
