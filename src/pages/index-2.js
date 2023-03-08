// Option 2: fetch products on the client side (useEffect)

import Head from 'next/head';
import Title from '../components/Title';

export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const response = await fetch('http://127.0.0.1:1337/products');
  const products = await response.json();
  return { props: { products } };
}

function HomePage({ products }) {
  console.log('[HomePage] render:', products);
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
