import React, { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
    const { allModels } = useData();
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
            navigate('/admin');
        }
    }, [navigate]);

    const [searchTerm, setSearchTerm] = React.useState('');

    // Filter products based on search term
    const getFilteredModels = () => {
        if (!searchTerm) return allModels;
        const lowerTerm = searchTerm.toLowerCase();
        return Object.values(allModels).filter(model =>
            (model.title && model.title.toLowerCase().includes(lowerTerm)) ||
            (model.category && model.category.toLowerCase().includes(lowerTerm)) ||
            (model.subcategory && model.subcategory.toLowerCase().includes(lowerTerm))
        ).reduce((acc, model) => {
            acc[model.id] = model;
            return acc;
        }, {});
    };

    const filteredModels = getFilteredModels();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin');
    };

    return (
        <div className="admin-dashboard container">
            <div className="dashboard-header">
                <h2>Admin Dashboard</h2>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>

            <div className="dashboard-section">
                <h3>Global Settings</h3>
                <div className="actions-card" style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                    <h4 style={{ marginBottom: '15px' }}>Site Configuration</h4>
                    <p style={{ marginBottom: '15px', color: '#666' }}>Edit phone numbers, email, logo, and social links.</p>
                    <Link to="/admin/settings" className="edit-btn" style={{ background: '#2c3e50' }}>Manage Settings</Link>
                </div>

                <h3>Content Management</h3>
                <div className="actions-card" style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                    <h4 style={{ marginBottom: '15px' }}>Blog Posts</h4>
                    <p style={{ marginBottom: '15px', color: '#666' }}>Manage your blog articles, news, and updates.</p>
                    <Link to="/admin/blog" className="edit-btn">Manage Blogs</Link>
                </div>
            </div>

            <div className="product-list dashboard-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                    <h3>Product Catalog ({Object.keys(filteredModels).length})</h3>
                    <div style={{ display: 'flex', gap: '10px', flex: 1, justifyContent: 'flex-end' }}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd', minWidth: '250px' }}
                        />
                        <Link to="/admin/product/new" className="add-btn" style={{ background: '#27ae60', padding: '10px 20px', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>+ Add Product</Link>
                    </div>
                </div>

                {Object.keys(filteredModels).length === 0 ? <p>No products found matching "{searchTerm}".</p> : (
                    Object.entries(
                        Object.values(filteredModels).reduce((acc, product) => {
                            const cat = product.category || 'Uncategorized';
                            const sub = product.subcategory || 'General';
                            if (!acc[cat]) acc[cat] = {};
                            if (!acc[cat][sub]) acc[cat][sub] = [];
                            acc[cat][sub].push(product);
                            return acc;
                        }, {})
                    ).map(([category, subcategories]) => (
                        <div key={category} className="category-group" style={{ marginBottom: '30px', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                            <div style={{ background: '#f8f9fa', padding: '15px', borderBottom: '1px solid #eee', fontWeight: 'bold', fontSize: '1.2em' }}>
                                {category}
                            </div>
                            <div style={{ padding: '15px' }}>
                                {Object.entries(subcategories).map(([subcategory, products]) => (
                                    <div key={subcategory} style={{ marginBottom: '20px' }}>
                                        <h5 style={{ color: '#666', borderBottom: '2px solid #3498db', paddingBottom: '5px', display: 'inline-block', marginBottom: '10px' }}>{subcategory}</h5>
                                        <div className="subcategory-products" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                                            {products.map(model => (
                                                <div key={model.id} className="product-item" style={{ border: '1px solid #eee', padding: '15px', borderRadius: '6px', background: 'white' }}>
                                                    <div className="product-info">
                                                        <div style={{ fontWeight: 'bold', color: '#2c3e50' }}>{model.title}</div>
                                                        <div style={{ fontSize: '0.85em', color: '#7f8c8d' }}>{model.subtitle}</div>
                                                    </div>
                                                    <div style={{ marginTop: '10px', textAlign: 'right' }}>
                                                        <Link to={`/admin/edit/${model.id}`} className="edit-btn" style={{ fontSize: '0.9em', padding: '5px 10px' }}>Edit</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
