const ProjectsCard = (props) => {
  const title = props.title;
  const description = props.description;
  const technologies = props.technologies;
  const code = props.code;
  const site = props.site;

  return (
    <div className='border-aqua  m-3 flex min-w-fit flex-col rounded-lg border-2 bg-black p-3 lg:mx-9 lg:my-7'>
      <h2 className='mb-3 text-2xl font-bold'>{title}</h2>
      <p className='mb-3 font-semibold text-white'>
        <a
          href={code}
          target='_blank'
          rel='noreferrer noopener'
          className='hover:text-teal'
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href={site}
          target='_blank'
          rel='noreferrer noopener'
          className='hover:text-teal'
        >
          Site
        </a>
      </p>
      <p className='mb-3 text-justify'>{description}</p>
      <h3 className='text-lg font-semibold text-white underline'>
        Technologies Used
      </h3>
      <div className='flex flex-wrap justify-center'>
        {technologies.map((technology) => {
          return (
            <p key={technology} className='m-1 text-white'>
              {technology} |
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsCard;
