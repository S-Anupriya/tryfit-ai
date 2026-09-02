import React, { useState } from 'react';
import { Search, Sparkles, ExternalLink } from 'lucide-react';
import './Products.css';

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  img: string;
}

const PRODUCTS: Product[] = [
  { id: 1, title: 'Cosmic Oversized Hoodie', category: 'Streetwear', price: '$85', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600' },
  { id: 2, title: 'Cyberpunk Leather Jacket', category: 'Outerwear', price: '$190', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600' },
  { id: 3, title: 'Nebula Silk Dress', category: 'Formal', price: '$140', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600' },
  { id: 4, title: 'Minimalist Void Tee', category: 'Streetwear', price: '$45', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600' },
  { id: 5, title: 'Astral Tailored Blazer', category: 'Formal', price: '$175', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600' },
  { id: 6, title: 'Starlight Denim Jacket', category: 'Outerwear', price: '$110', img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600' },
];

const CATEGORIES = ['All', 'Streetwear', 'Outerwear', 'Formal'];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="explore-container">
      {/* Search & Header Section */}
      <div className="explore-header">
        <h1>Explore Collection</h1>
        <p>Discover high-end fashion to preview directly in the Try-On studio.</p>

        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search items, jackets, dresses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="category-chips">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.img} alt={product.title} />
              <button className="try-on-badge">
                <Sparkles size={14} />
                <span>Try On</span>
              </button>
            </div>

            <div className="product-details">
              <div className="product-info">
                <span className="category-label">{product.category}</span>
                <h3>{product.title}</h3>
              </div>
              <div className="product-footer">
                <span className="price">{product.price}</span>
                <button className="inspect-btn" title="View Details">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;