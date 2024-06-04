import React, { useState } from 'react';
import './details.css';

function Details() {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='block'>
            <div className="accordion">
                <div className="accordion-item">
                    <button className={`accordion-header ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
                        num of views, date uploaded
                    </button>
                    <div className="accordion-content" style={{ maxHeight: isActive ? '200px' : '0' }}>
                        <p>This is the content of the details section. Here you can place the video description, tags, and any other relevant information.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
