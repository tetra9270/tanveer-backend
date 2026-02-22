import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyProductsBanner.css';
import ShreddersImg from '../assets/shredders.png';
import AppShreddersImg from '../assets/application-shredders.png';
import LaminatorsImg from '../assets/binders-and-laminators.png';
import PetShreddersImg from '../assets/pet-bottle-shredders.png';

const BuyProductsBanner = () => {
    const navigate = useNavigate();

    return (
        <section className="buy-products-section">
            <div className="banner-top-html">
                <div className="container banner-flex">
                    <div className="banner-empty-left"></div>
                    <div className="banner-images-center">
                        <img src={ShreddersImg} alt="Shredder" className="b-img img-1" />
                        <img src={LaminatorsImg} alt="Laminator" className="b-img img-2" />
                        <img src={AppShreddersImg} alt="App Shredder" className="b-img img-3" />
                        <img src={PetShreddersImg} alt="Pet Shredder" className="b-img img-4" />
                    </div>
                    <div className="banner-text-right">
                        <h2>Buy Products</h2>
                        <h3>ONLINE</h3>
                    </div>
                </div>
            </div>
            <div className="banner-bottom">
                <div className="container banner-bottom-content">
                    <span className="banner-text">No 1 B2B Shredder Selling Company in India</span>
                    <button className="banner-btn" onClick={() => navigate('/products')}>CLICK HERE</button>
                </div>
            </div>
        </section>
    );
};

export default BuyProductsBanner;
