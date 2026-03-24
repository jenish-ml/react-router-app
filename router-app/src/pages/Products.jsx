import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="btn-details">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
