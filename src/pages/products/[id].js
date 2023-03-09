import Head from 'next/head';
import { getProduct, getProducts } from '@/lib/products';

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: 30,
    };
  } catch (err) {
    return { notFound: true };
  }
}

function ProductPage({ product }) {
  console.log('ProductPage render:', product);
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </main>
    </>
  );
}
export default ProductPage;
