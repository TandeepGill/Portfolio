import Head from 'next/head';

import ProjectsCard from '../../components/projects/projects-card';

const Projects = () => {
  const allProjects = [
    {
      title: 'Rentalverse',
      description:
        'Rentalverse is a full stack web application designed and developed to help individuals and small real estate investment firms manage their rental properties. This is a unique individual project that I created from the ground up. The inspiration for this project came from my knowledge gained in my previous work experiences. I will be continuously working on this project to build out more complex features.',
      technologies: [
        'React',
        'React Router',
        'Redux',
        'Axios',
        'Tailwind',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Bcrypt and JWT (Authentication)',
      ],
      code: 'https://github.com/TandeepGill/Rentalverse',
      site: 'TBD',
    },
    {
      title: 'BooyaTravel',
      description:
        'BooyaTravel is a collaborative travel itinerary planner. Features include drag and dropping activities/itineraries while planning an itinerary, realtime chat with collaborators, autocomplete for simple and quick searching, and markers rendering on the map depending on the list of locations. This is a FullStack Academy Capstone Project, spanning over three weeks, with four contributors working together using agile software development.',
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
        'Bcrypt and JWT (Authentication)',
      ],
      code: 'https://github.com/Yaya-2109/Capstone',
      site: 'https://booya-travel.herokuapp.com/',
    },
    {
      title: 'Grace Shopper',
      description:
        'GraceShopper is a Udemy-style e-commerce learning platform offering video courses for purchase. It supports video sorting by category, persistent shopping carts for both guests and registered users, and feedback to prevent the re-purchase of previously acquired products. This project was created using Agile software development, over the course of eight days with a four-man team at FullStack Academy.',
      technologies: [
        'React',
        'Redux',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Axios',
        'Sass',
        'Bcrypt and JWT (Authentication)',
      ],
      code: 'https://github.com/2109graceshopper/Udemy-Larks',
      site: 'https://udemylarks.herokuapp.com/',
    },
    {
      title: 'Portfolio',
      description:
        'This is my personal portfolio website, built with Next.js, utilizing functional React components. State management is achieved with the React useState Hook. This is the very first iteration of my portfolio website, it will continuously evolve from both a design and functionality perspective.',
      technologies: ['React', 'Next.js', 'Tailwind'],
      code: 'https://github.com/TandeepGill/Portfolio',
      site: 'https://www.tandeepgill.com/',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Tandeep Gill - Full Stack SWE - Projects</title>
      </Head>
      <div className='flex w-full flex-col items-center justify-center px-4 text-center lg:px-20'>
        <div className='lg:w-7/12'>
          <div className='flex w-full flex-col items-start justify-center lg:mb-4'>
            {allProjects.map((project) => {
              return (
                <ProjectsCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  code={project.code}
                  site={project.site}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
