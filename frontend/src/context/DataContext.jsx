import React, { createContext, useState, useEffect, useContext } from 'react';
import { modelData as initialData } from '../data/modelData';
import { blogData as initialBlogData } from '../data/blogData';
import { api } from '../services/api';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [allModels, setAllModels] = useState(initialData); // Default to local data initially
    const [blogs, setBlogs] = useState(initialBlogData); // Default to local data initially
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch products
                try {
                    const productsData = await api.getProducts();
                    // If backend is empty (first run), we might want to seed it or just use empty
                    // For now, if we get data, use it. If array empty, maybe keep initialData?
                    // Let's assume if backend returns success, we use it.
                    if (productsData && Object.keys(productsData).length > 0) {
                        setAllModels(productsData);
                    }
                } catch (e) {
                    console.error("Error loading products from API:", e);
                    // Fallback to initialData is already set
                }

                // Fetch blogs
                try {
                    const blogsData = await api.getBlogs();
                    if (blogsData && blogsData.length > 0) {
                        setBlogs(blogsData);
                    }
                } catch (e) {
                    console.error("Error loading blogs from API:", e);
                }

                // Fetch Settings
                try {
                    const settingsData = await api.getSettings();
                    setSettings(settingsData);
                } catch (e) {
                    console.error("Error loading settings:", e);
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const updateModel = async (id, updatedModel) => {
        try {
            await api.updateProduct(id, updatedModel);
            setAllModels(prev => ({
                ...prev,
                [id]: updatedModel
            }));
        } catch (err) {
            alert('Failed to update product: ' + err.message);
        }
    };

    const addModel = async (id, newModel) => {
        try {
            await api.createProduct(newModel);
            setAllModels(prev => ({
                ...prev,
                [id]: newModel
            }));
        } catch (err) {
            alert('Failed to add product: ' + err.message);
        }
    };

    const deleteModel = async (id) => {
        try {
            await api.deleteProduct(id);
            setAllModels(prev => {
                const newData = { ...prev };
                delete newData[id];
                return newData;
            });
        } catch (err) {
            alert('Failed to delete product: ' + err.message);
        }
    };

    // Blog Functions
    const addBlog = async (newBlog) => {
        try {
            await api.createBlog(newBlog);
            setBlogs(prev => [...prev, newBlog]);
        } catch (err) {
            alert('Failed to add blog: ' + err.message);
        }
    };

    const updateBlog = async (id, updatedBlog) => {
        try {
            await api.updateBlog(id, updatedBlog);
            setBlogs(prev => prev.map(blog => blog.id === id ? updatedBlog : blog));
        } catch (err) {
            alert('Failed to update blog: ' + err.message);
        }
    };

    const deleteBlog = async (id) => {
        try {
            await api.deleteBlog(id);
            setBlogs(prev => prev.filter(blog => blog.id !== id));
        } catch (err) {
            alert('Failed to delete blog: ' + err.message);
        }
    };

    const updateSettings = async (settingsData) => {
        try {
            const updated = await api.updateSettings(settingsData);
            setSettings(updated);
            return updated;
        } catch (e) {
            throw e;
        }
    };

    const resetData = () => {
        // This might need to be "seed database" now
        setAllModels(initialData);
        setBlogs(initialBlogData);
    };

    return (
        <DataContext.Provider value={{
            allModels, updateModel, addModel, deleteModel,
            blogs, addBlog, updateBlog, deleteBlog,
            settings, updateSettings,
            resetData, loading, error
        }}>
            {children}
        </DataContext.Provider>
    );
};
