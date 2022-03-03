import Head from 'next/head';

import SkillsCard from '../../components/skills/skills-card';

const Skills = () => {
  const frontEnd = [
    'JavaScript',
    'React',
    'Redux',
    'Next.js',
    'Tailwind',
    'CSS3',
    'HTML5',
  ];
  const backEnd = ['Node', 'Express', 'PostgreSQL', 'Sequelize'];
  const devOps = ['Git', 'GitHub', 'Heroku', 'Vercel'];
  const otherTools = ['Postico', 'Postman', 'Test Driven Development'];

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Tandeep Gill - Full Stack SWE - Skills</title>
      </Head>
      <div className='mb-44 flex w-full flex-1 items-center justify-center px-20 text-center'>
        <div className='flex flex-col items-start justify-center lg:flex-row'>
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
