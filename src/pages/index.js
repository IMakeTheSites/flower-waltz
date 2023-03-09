import Head from 'next/head';
import Title from '../components/Title';
import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
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
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
