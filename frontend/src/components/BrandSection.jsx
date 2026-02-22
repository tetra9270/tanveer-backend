import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BrandSection.css';

const BrandSection = () => {
    const navigate = useNavigate();
    return (
        <section className="brand-section">
            <div className="container brand-section-container">
                <div className="brand-content-wrapper">
                    <div className="brand-header">
                        <h3>CHOICE OF BRAND</h3>
                    </div>
                    <div className="brands-container">
                        <div className="brand-box avanti-logo" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>AVANTI</div>
                        <div className="brand-box antiva-logo" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>ANTIVA</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSection;
