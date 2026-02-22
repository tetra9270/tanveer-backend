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
        {
            id: 1,
            title: 'Connection with a handle Omnires round',
            image: ShreddersImg,
            link: '/select-brand/document-shredders',
            discount: '-30%',
            sideBrand: 'AVANTI',
            sideModel: 'MS 400',
            sideDesc: 'Woven Bag Shredder',
            sku: 'Omnires | Part No. 2123532',
            price: '4500.00',
            inStock: true
        },
        {
            id: 2,
            title: 'Connection with a handle Omnires round',
            image: AppShreddersImg,
            link: '/select-brand/app-shredders',
            discount: '-30%',
            sideBrand: 'AVANTI',
            sideModel: 'MS 400',
            sideDesc: 'Woven Bag Shredder',
            sku: 'Omnires | Part No. 2123532',
            price: '4500.00',
            inStock: true
        },
        {
            id: 3,
            title: 'Connection with a handle Omnires round',
            image: LaminatorsImg,
            link: '/select-brand/laminators',
            discount: '-30%',
            sideBrand: 'AVANTI',
            sideModel: 'MS 400',
            sideDesc: 'Woven Bag Shredder',
            sku: 'Omnires | Part No. 2123532',
            price: '4500.00',
            inStock: true
        },
        {
            id: 4,
            title: 'Connection with a handle Omnires round',
            image: PetShreddersImg,
            link: '/select-brand/app-shredders',
            discount: '-30%',
            sideBrand: 'AVANTI',
            sideModel: 'MS 400',
            sideDesc: 'Woven Bag Shredder',
            sku: 'Omnires | Part No. 2123532',
            price: '4500.00',
            inStock: true
        }
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
