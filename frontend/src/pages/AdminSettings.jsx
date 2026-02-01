import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';
import './Admin.css';

const AdminSettings = () => {
    const { settings, updateSettings } = useData();
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        companyName: '',
        logoUrl: '',
        address: '',
        facebookUrl: '',
        twitterUrl: '',
        instagramUrl: '',
        carouselImages: '',
        homePageTitle: '',
        brandSelectionTitle: '',
        aboutUsText: '',
        contactInfoText: '',
        footerText: ''
    });

    useEffect(() => {
        if (settings) {
            setFormData({
                phone: settings.phone || '',
                email: settings.email || '',
                companyName: settings.companyName || '',
                logoUrl: settings.logoUrl || '',
                address: settings.address || '',
                facebookUrl: settings.facebookUrl || '',
                twitterUrl: settings.twitterUrl || '',
                instagramUrl: settings.instagramUrl || '',
                carouselImages: settings.carouselImages ? settings.carouselImages.join('\n') : '',
                homePageTitle: settings.homePageTitle || '',
                brandSelectionTitle: settings.brandSelectionTitle || '',
                aboutUsText: settings.aboutUsText || '',
                contactInfoText: settings.contactInfoText || '',
                footerText: settings.footerText || ''
            });
        }
    }, [settings]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSave = {
                ...formData,
                carouselImages: formData.carouselImages.split('\n').map(s => s.trim()).filter(Boolean)
            };
            await updateSettings(dataToSave);
            alert('Settings updated successfully!');
        } catch (err) {
            alert('Failed to update settings: ' + err.message);
        }
    };

    return (
        <div className="admin-dashboard container">
            <div className="dashboard-header">
                <h2>Site Settings</h2>
                <Link to="/admin/dashboard" className="cancel-btn" style={{ background: '#666' }}>Back</Link>
            </div>

            <div className="edit-form-container">
                <form onSubmit={handleSubmit}>
                    <h3>Basic Information</h3>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input name="companyName" value={formData.companyName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea name="address" value={formData.address} onChange={handleChange} />
                    </div>

                    <h3>Branding</h3>
                    <div className="form-group">
                        <label>Logo URL</label>
                        <ImageUpload
                            label="Upload Logo"
                            onUpload={(url) => setFormData(prev => ({ ...prev, logoUrl: url }))}
                            existingImage={formData.logoUrl}
                        />
                        <input
                            name="logoUrl"
                            value={formData.logoUrl}
                            onChange={handleChange}
                            placeholder="Or enter URL manually"
                            style={{ marginTop: '10px' }}
                        />
                        {formData.logoUrl && (
                            <div style={{ marginTop: '10px', padding: '10px', background: '#eee' }}>
                                <img src={formData.logoUrl} alt="Logo Preview" style={{ maxHeight: '50px' }} />
                            </div>
                        )}
                    </div>

                    <h3>Social Media Links</h3>
                    <div className="form-group">
                        <label>Facebook URL</label>
                        <input name="facebookUrl" value={formData.facebookUrl} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Instagram URL</label>
                        <input name="instagramUrl" value={formData.instagramUrl} onChange={handleChange} />
                    </div>

                    <h3>Home Page Slider (Carousel)</h3>
                    <div className="form-group">
                        <label>Image URLs (One per line)</label>
                        <textarea
                            name="carouselImages"
                            rows="5"
                            placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                            value={formData.carouselImages}
                            onChange={(e) => setFormData({ ...formData, carouselImages: e.target.value })}
                        />
                        <p style={{ fontSize: '0.8em', color: '#666' }}>Enter direct image links. Leave empty to use default banner.</p>
                    </div>

                    <h3>Content Management</h3>
                    <div className="form-group">
                        <label>Home Page Title (Best Sellers Section)</label>
                        <input name="homePageTitle" value={formData.homePageTitle} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Brand Selection Title</label>
                        <input name="brandSelectionTitle" value={formData.brandSelectionTitle} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>About Us Text</label>
                        <textarea name="aboutUsText" rows="4" value={formData.aboutUsText} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Contact Info Text (Intro text)</label>
                        <textarea name="contactInfoText" rows="3" value={formData.contactInfoText} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Footer Text (Copyright / Bottom)</label>
                        <input name="footerText" value={formData.footerText} onChange={handleChange} />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="save-btn">Save Settings</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminSettings;
