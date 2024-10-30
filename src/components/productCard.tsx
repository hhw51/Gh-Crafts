// app/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>${price}</strong></p>
      <button
        style={{
          padding: '10px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
