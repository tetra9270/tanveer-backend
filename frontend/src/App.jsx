import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BrandSection from './components/BrandSection';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import AppShredderDetail from './pages/AppShredderDetail';
import LaminatorDetail from './pages/LaminatorDetail';


import AntivaDetail from './pages/AntivaDetail';
import AvantiDetail from './pages/AvantiDetail';
import BrandSelection from './pages/BrandSelection';
import ModelView from './pages/ModelView';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminEditProduct from './pages/AdminEditProduct';
import AdminBlogList from './pages/AdminBlogList';
import AdminEditBlog from './pages/AdminEditBlog';
import AdminSettings from './pages/AdminSettings';
import './App.css';

import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/document-shredders" element={<ProductDetail />} />
              <Route path="/product/app-shredders" element={<AppShredderDetail />} />
              <Route path="/product/laminators" element={<LaminatorDetail />} />
              <Route path="/brand/antiva/:category" element={<AntivaDetail />} />
              <Route path="/brand/avanti/:category" element={<AvantiDetail />} />
              <Route path="/select-brand/:category" element={<BrandSelection />} />
              <Route path="/model/:modelId" element={<ModelView />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/admin/product/new" element={<AdminEditProduct />} />
              <Route path="/admin/edit/:modelId" element={<AdminEditProduct />} />

              {/* Admin Blog Routes */}
              <Route path="/admin/blog" element={<AdminBlogList />} />
              <Route path="/admin/blog/new" element={<AdminEditBlog />} />
              <Route path="/admin/blog/edit/:id" element={<AdminEditBlog />} />

              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <BrandSection />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
