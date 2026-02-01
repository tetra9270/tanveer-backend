import React from 'react';
import ProductsBanner from '../components/ProductsBanner';
import ProductSection from '../components/ProductSection';
import ShreddersImg from '../assets/shredders.png';
import AppShreddersImg from '../assets/application-shredders.png';
import LaminatorsImg from '../assets/binders-and-laminators.png';

const Products = () => {
    const products = [
        { id: 1, title: 'Document Shredders', image: ShreddersImg, link: '/select-brand/document-shredders', slug: 'document-shredders' },
        { id: 2, title: 'Multipurpose Application Shredders', image: AppShreddersImg, link: '/select-brand/app-shredders', slug: 'app-shredders' },
        { id: 3, title: 'Document Laminators & Binders', image: LaminatorsImg, link: '/select-brand/laminators', slug: 'laminators' }
    ];

    return (
        <div className="page-container" style={{ paddingBottom: '60px' }}>
            <ProductsBanner />
            <ProductSection title="Complete Product Catalog" products={products} showViewDetails={false} />

            {/* Brand Section Removed - Moved to App.jsx */}
        </div>
    );
};

export default Products;
