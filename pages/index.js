import Head from 'next/head';

const callToActionHandler = () => {
  return window.open('mailto:gill.tandeep@gmail.com', '_blank');
};

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Tandeep Gill - Full Stack SWE</title>
      </Head>
      <div>
        <div className='items-left mb-32 flex w-full flex-1 flex-col justify-center px-12 lg:mr-48 lg:px-20'>
          <h1 className='mb-4 text-lg text-white lg:mb-7 lg:text-xl'>
            Hi, my name is
          </h1>
          <h2 className='mb-4 text-4xl font-bold lg:mb-7 lg:text-6xl'>
            Tandeep Gill.
          </h2>
          <h3 className='text-teal mb-4 text-3xl font-bold lg:mb-7 lg:text-5xl'>{`I'm a Full Stack Software Engineer.`}</h3>
          <p className='mb-4 max-w-2xl text-lg text-white lg:mb-7 lg:text-lg'>
            The world is continuously evolving and{' '}
            <span className='text-teal font-bold italic'>technology</span> is
            becoming an integral part in all aspects of{' '}
            <span className='text-teal font-bold italic'>society</span>, due to
            the multiplying stream of{' '}
            <span className='text-teal font-bold italic'>challenges</span> faced
            on a daily basis by companies and consumers. It&apos;s my{' '}
            <span className='text-teal font-bold italic'>passion</span> and{' '}
            <span className='text-teal font-bold italic'>love</span> for solving
            these challenges which ultimately{' '}
            <span className='text-teal font-bold italic'>drove</span> me to
            become a{' '}
            <span className='text-teal font-bold italic'>
              software engineer
            </span>
            .
            {/* {`The world is continuously evolving and technology is becoming an integral part in all aspects of
            society, due to the multiplying stream of challenges faced on a
            daily basis by companies and consumers. It's my passion and love for
            solving these challenges which ultimately drove me to become a
            software engineer.`} */}
          </p>
          <button
            className='bg-aqua hover:bg-teal text-slate mt-4 w-44 items-center rounded-md border border-transparent px-6 py-3 text-base font-semibold hover:text-white lg:mt-7'
            type='button'
            onClick={callToActionHandler}
          >
            Get In Touch!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
