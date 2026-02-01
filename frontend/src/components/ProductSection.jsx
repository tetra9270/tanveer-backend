import { Link } from 'react-router-dom';
import './ProductSection.css';

const ProductSection = ({ title, products, showBrands = true, showViewDetails = true }) => {
    return (
        <section className="products-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="card-image">
                                {showBrands && (
                                    <div className="brand-tags">
                                        <Link to={`/brand/antiva/${product.slug}`} className="brand-tag">ANTIVA</Link>
                                        <Link to={`/brand/avanti/${product.slug}`} className="brand-tag">AVANTI</Link>
                                    </div>
                                )}
                                <Link to={product.link}>
                                    <img src={product.image} alt={product.title} />
                                </Link>
                            </div>
                            <div className="card-content">
                                <h3>{product.title}</h3>
                                {showViewDetails && <Link to={product.link} className="card-link">View Details</Link>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
