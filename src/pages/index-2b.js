// Option 2: fetch products on the client side (useEffect)
// from internal API route
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Title from '../components/Title';

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  console.log('[HomePage] index2 render:', products);

  return (
    <>
      <Head>
        <title>Waltz of the Flowers Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Waltz of the Flowers Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
