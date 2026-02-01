const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
    // Products
    getProducts: async () => {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        return response.json();
    },
    createProduct: async (productData) => {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
        if (!response.ok) throw new Error('Failed to create product');
        return response.json();
    },
    updateProduct: async (id, productData) => {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
        if (!response.ok) throw new Error('Failed to update product');
        return response.json();
    },
    deleteProduct: async (id) => {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete product');
        return response.json();
    },

    // Blogs
    getBlogs: async () => {
        const response = await fetch(`${API_URL}/blogs`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        return response.json();
    },
    createBlog: async (blogData) => {
        const response = await fetch(`${API_URL}/blogs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogData)
        });
        if (!response.ok) throw new Error('Failed to create blog');
        return response.json();
    },
    updateBlog: async (id, blogData) => {
        const response = await fetch(`${API_URL}/blogs/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogData)
        });
        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(errorBody.message || 'Failed to update blog');
        }
        return response.json();
    },
    deleteBlog: async (id) => {
        const response = await fetch(`${API_URL}/blogs/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || 'Failed to delete blog');
        }
        return response.json();
    },

    // Settings
    getSettings: async () => {
        const response = await fetch(`${API_URL}/settings`);
        if (!response.ok) throw new Error('Failed to fetch settings');
        return response.json();
    },
    updateSettings: async (settingsData) => {
        const response = await fetch(`${API_URL}/settings`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(settingsData)
        });
        if (!response.ok) throw new Error('Failed to update settings');
        return response.json();
    },

    // Upload
    uploadImage: async (formData) => {
        const response = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Image upload failed');
        }
        return response.json();
    },

    // Auth
    login: async (credentials) => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Login failed');
        }
        return response.json();
    }
};
