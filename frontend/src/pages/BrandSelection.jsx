import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import './BrandSelection.css';

const BrandSelection = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const { settings } = useData();

    const handleSelectBrand = (brand) => {
        // Navigate to the existing brand specific pages
        navigate(`/brand/${brand}/${category}`);
    };

    return (
        <div className="brand-selection-container container">
            <h2>{settings?.brandSelectionTitle || "Select a Brand"}</h2>
            <p>Choose a brand to view available products</p>

            <div className="brand-cards">
                <div className="brand-card" onClick={() => handleSelectBrand('avanti')}>
                    <div className="brand-logo">AVANTI</div>
                    <button className="select-btn">View Avanti Products</button>
                </div>

                <div className="brand-card" onClick={() => handleSelectBrand('antiva')}>
                    <div className="brand-logo">ANTIVA</div>
                    <button className="select-btn">View Antiva Products</button>
                </div>
            </div>

            <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default BrandSelection;
