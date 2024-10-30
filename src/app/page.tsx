"use client";
// app/page.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import ProductCard from '../components/productCard';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      
      if (error) {
        console.error("Supabase fetch error:", error.message);
        setError("Failed to load products.");
        return;
      }

      if (data) {
        setProducts(data as unknown as Product[]); // Explicitly cast data to Product[]
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Welcome to My Handicrafts Store</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;