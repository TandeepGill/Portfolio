import Head from 'next/head';
import Image from 'next/image';

// Sectional Components Go Here

export default function Home() {
  // return <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Tandeep Gill SWE Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-3xl font-bold underline'>Hello World!</h1>
      </div>
    </div>
  );
}
