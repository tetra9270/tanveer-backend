import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ImageUpload from '../components/ImageUpload';
import './Admin.css';

const AdminEditBlog = () => {
    const { id } = useParams(); // If id exists, it's edit mode
    const navigate = useNavigate();
    const { blogs, addBlog, updateBlog } = useData();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: '',
        author: 'Admin',
        date: new Date().toISOString().split('T')[0]
    });

    useEffect(() => {
        if (isEditMode) {
            const blogToEdit = blogs.find(b => b.id === id);
            if (blogToEdit) {
                setFormData(blogToEdit);
            } else {
                alert('Blog post not found!');
                navigate('/admin/blog');
            }
        }
    }, [id, blogs, isEditMode, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditMode) {
            // Remove internal fields that shouldn't be updated or might cause issues
            const { _id, createdAt, updatedAt, ...updateData } = formData;
            updateBlog(id, { ...updateData, id });
        } else {
            const newId = Date.now().toString(); // Simple ID generation
            addBlog({ ...formData, id: newId });
        }
        navigate('/admin/blog');
    };

    return (
        <div className="admin-container container">
            <div className="admin-header">
                <h2>{isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
                <button onClick={() => navigate('/admin/blog')} className="back-btn">Cancel</button>
            </div>

            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Image</label>
                    <ImageUpload
                        onUpload={(url) => setFormData(prev => ({ ...prev, image: url }))}
                        existingImage={formData.image}
                    />
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Or enter URL manually"
                        style={{ marginTop: '10px' }}
                    />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows="15"
                        required
                        placeholder="Write your article here..."
                    ></textarea>
                </div>

                <button type="submit" className="save-btn">
                    {isEditMode ? 'Update Post' : 'Publish Post'}
                </button>
            </form>
        </div>
    );
};

export default AdminEditBlog;
