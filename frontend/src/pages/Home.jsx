import React from 'react';
import { useData } from '../context/DataContext';
import Carousel from '../components/Carousel';
import ProductSection from '../components/ProductSection';
import './Home.css';
import ShreddersImg from '../assets/shredders.png';
import AppShreddersImg from '../assets/application-shredders.png';
import LaminatorsImg from '../assets/binders-and-laminators.png';
import PetShreddersImg from '../assets/pet-bottle-shredders.png';



const Home = () => {
    const { settings } = useData();
    const bestSellers = [
        { id: 1, title: 'Document Shredders', image: ShreddersImg, link: '/select-brand/document-shredders' },
        { id: 2, title: 'Multipurpose Application Shredders', image: AppShreddersImg, link: '/select-brand/app-shredders' },
        { id: 3, title: 'Document Laminators & Binders', image: LaminatorsImg, link: '/select-brand/laminators' },
        { id: 4, title: 'Pet Bottle Shredders', image: PetShreddersImg, link: '/select-brand/app-shredders' }
    ];

    return (
        <div className="home-page">
            <Carousel />
            <ProductSection title={settings?.homePageTitle || "Our Best Sellers"} products={bestSellers} showBrands={false} />



            {/* Brand Section Removed - Moved to App.jsx */}
        </div>
    );
};

export default Home;
