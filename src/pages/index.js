import Head from 'next/head';
import Title from '../components/Title';

const products = [
  { id: 1, title: 'First Product' },
  { id: 2, title: 'Second Product' },
];

function HomePage() {
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
