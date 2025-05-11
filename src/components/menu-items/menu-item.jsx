import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import './menu-item.scss';


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate(); // Initialize navigate function

    return (
        <div
            className={`${size} menu-item`}
            onClick={() => navigate(linkUrl)} // Use navigate instead of history.push
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;