import Head from 'next/head';

import SkillsCard from '../../components/skills/skills-card';

const Skills = () => {
  const frontEnd = [
    'JavaScript',
    'React',
    'Next.js',
    'Redux',
    'Tailwind',
    'CSS3',
    'HTML5',
  ];
  const backEnd = [
    'Java',
    'Spring Boot',
    'JPA/Hibernate',
    'JUnit',
    'Mockito',
    'Node/Express',
    'SQL',
  ];
  const devOps = ['Git', 'GitHub', 'Heroku', 'Vercel'];
  const otherTools = [
    'Postico',
    'Postman',
    'Test Driven Development',
    'MVC Design Pattern',
    'Jira',
  ];

  return (
    <div className='mx-4 flex min-h-screen flex-col justify-center py-2'>
      <Head>
        <title>Tandeep Gill - Full Stack SWE - Skills</title>
      </Head>
      <div className='flex w-full flex-col items-center justify-center lg:mb-44 lg:flex-row lg:px-20'>
        <div className='flex w-full flex-col items-start justify-center lg:flex-row lg:flex-wrap'>
          <SkillsCard title='FRONTEND' skills={frontEnd} />
          <SkillsCard title='BACKEND' skills={backEnd} />
          <SkillsCard title='DEVOPS' skills={devOps} />
          <SkillsCard title='OTHER TOOLS' skills={otherTools} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
