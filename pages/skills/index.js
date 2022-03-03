import Head from 'next/head';

import SkillsCard from '../../components/skills/skills-card';

const Skills = () => {
  const frontEnd = [
    'JavaScript',
    'React',
    'Redux',
    'Tailwind',
    'CSS3',
    'HTML5',
  ];
  const backEnd = ['Node/Express', 'PostgreSQL', 'Sequelize'];
  const devOps = ['Git', 'GitHub'];
  const otherTools = ['Postico', 'Postman'];

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Tandeep Gill - Full Stack SWE - Skills</title>
      </Head>
      <div className='mb-44 flex w-full flex-1 items-center justify-center px-20 text-center'>
        <div className='flex items-start justify-center'>
          <SkillsCard title='Frontend' skills={frontEnd} />
          <SkillsCard title='Backend' skills={backEnd} />
          <SkillsCard title='DevOps' skills={devOps} />
          <SkillsCard title='Other Tools' skills={otherTools} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
