import Head from 'next/head';

const Projects = () => {
  const allProjects = [
    {
      title: 'BooyaTravel',
      description:
        'BooyaTravel is a collaborative travel itinerary planner. A FullStack Academy capstone project with four contributors. Features include drag and dropping activities/itineraries while planning an itinerary, realtime chat with collaborators, autocomplete for simple and quick searching, and markers rendering on the map depending on the list of locations.',
      technologies: [
        'React',
        'Redux',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Axios',
        'React Beautiful DnD',
        'Socket.IO',
        'Tailwind',
        'Google Maps API',
        'Travel Advisor API',
      ],
      code: 'https://github.com/Yaya-2109/Capstone',
      site: 'https://booya-travel.herokuapp.com/',
    },
    {
      title: 'Grace Shopper',
      description:
        'GraceShopper is a udemy-style e-commerce learning platform offering video courses for purchase. It supports video sorting by category, persistent shopping carts for both guests and registered users, and feedback to prevent the re-purchase of previously acquired products. This project was created over the course of eight days with a four-man team at FullStack Academy.',
      technologies: [
        'React',
        'Redux',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Axios',
        'Sass',
      ],
      code: 'https://github.com/2109graceshopper/Udemy-Larks',
      site: 'https://udemylarks.herokuapp.com/',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Tandeep Gill - Full Stack SWE - Projects</title>
      </Head>
      <div className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <div className='mb-44 flex w-full flex-1 items-center justify-center px-20 text-center'>
          <div className='flex flex-col items-start justify-center lg:flex-row'></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
