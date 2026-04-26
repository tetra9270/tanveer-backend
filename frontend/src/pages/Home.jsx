import React from 'react';
import { useData } from '../context/DataContext';
import Carousel from '../components/Carousel';
import ProductSection from '../components/ProductSection';
import BrandSection from '../components/BrandSection';
import './Home.css';
import ShreddersImg from '../assets/shredders.png';
import AppShreddersImg from '../assets/application-shredders.png';
import LaminatorsImg from '../assets/binders-and-laminators.png';
import PetShreddersImg from '../assets/pet-bottle-shredders.png';



const Home = () => {
    const { settings } = useData();
    const bestSellers = [
        {
            id: 'category-document-shredders',
            title: 'Document Shredders',
            image: ShreddersImg,
            link: '/select-brand/document-shredders',
            sku: 'Browse Category',
            inStock: true
        },
        {
            id: 'category-multipurpose-shredders',
            title: 'Multipurpose Application Shredders',
            image: AppShreddersImg,
            link: '/select-brand/multipurpose-shredders',
            sku: 'Browse Category',
            inStock: true
        },
        {
            id: 'category-laminators-binders',
            title: 'Document Laminators & Binders',
            image: LaminatorsImg,
            link: '/select-brand/laminators-binders',
            sku: 'Browse Category',
            inStock: true
        },
        {
            id: 'category-waste-management',
            title: 'Waste Management & Recycling',
            image: PetShreddersImg,
            link: '/select-brand/waste-management-recycling',
            sku: 'Browse Category',
            inStock: true
        }
    ];

    return (
        <div className="home-page">
            <Carousel />
            <BrandSection />
            <ProductSection title={settings?.homePageTitle || "Our Best Sellers"} products={bestSellers} showBrands={false} hidePrice={true} />
        </div>
    );
};

export default Home;
