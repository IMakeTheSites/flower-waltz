import Head from 'next/head';
import { getProduct, getProducts } from '@/lib/products';

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id);
  return {
    props: { product },
  };
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
