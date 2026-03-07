import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import './BrandSelection.css';

const BrandSelection = () => {
    const { category } = useParams();
    const { allModels } = useData();
    const navigate = useNavigate();

    // Map URL slug to the actual category name
    const categoryMapping = {
        'document-shredders': 'Document Shredders',
        'app-shredders': 'Multipurpose Application Shredders',
        'laminators': 'Document Laminators & Binders'
    };

    const actualCategory = categoryMapping[category] || category;

    // Filter products that belong to this category
    const categoryProducts = Object.values(allModels).filter(model => {
        return model.category?.toLowerCase() === actualCategory.toLowerCase();
    });

    return (
        <div className="page-container" style={{ paddingBottom: '60px' }}>
            <div className="container" style={{ marginTop: '40px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ color: '#0f8b4d', margin: 0 }}>{actualCategory}</h2>
                    <button className="back-btn" onClick={() => navigate(-1)} style={{ padding: '8px 16px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Go Back</button>
                </div>
                <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #ddd' }} />

                {categoryProducts.length === 0 ? (
                    <p style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '8px' }}>No products found in this category.</p>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                        {categoryProducts.map(model => (
                            <div key={model.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '15px', background: 'white', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                                    <img src={model.image} alt={model.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ flexGrow: 1 }}>
                                    <h4 style={{ margin: '0 0 10px 0', color: '#dc3545' }}>{model.title}</h4>
                                    {model.subtitle && <p style={{ fontSize: '13px', color: '#666', margin: '0 0 10px 0' }}>{model.subtitle}</p>}
                                    <div style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '15px' }}>
                                        {model.brand}
                                    </div>
                                </div>
                                <button
                                    onClick={() => navigate(`/model/${model.id}`)}
                                    style={{ background: '#0f8b4d', color: 'white', border: 'none', padding: '10px', borderRadius: '20px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrandSelection;
