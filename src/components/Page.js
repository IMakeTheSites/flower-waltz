import Head from 'next/head';
import Title from '../components/Title';

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - Waltz of the Flowers Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}

export default Page;
