import React from 'react';
import './BrandSection.css';

const BrandSection = () => {
    return (
        <section className="brand-section">
            <div className="container text-center">
                <h3>Choice of Brand</h3>
                <div className="brands-container">
                    <div className="brand-box">ANTIVA</div>
                    <div className="brand-box">AVANTI</div>
                </div>
            </div>
        </section>
    );
};

export default BrandSection;
