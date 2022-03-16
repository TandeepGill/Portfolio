const ProjectsCard = (props) => {
  const title = props.title;
  const description = props.description;
  const technologies = props.technologies;
  const code = props.code;
  const site = props.site;

  return (
    <div className='border-aqua my-4 flex min-w-fit flex-col rounded-lg border-2 bg-black p-3 lg:mx-9 lg:my-6'>
      <h2 className='mb-3 text-2xl font-bold'>{title}</h2>
      <div className='mb-3 font-semibold text-white'>
        <div className='flex justify-center'>
          <a href={code} target='_blank' rel='noreferrer noopener'>
            <div className='text-slate bg-aqua hover:bg-teal mx-2 h-9 w-24 rounded-md border border-transparent py-1 hover:text-white'>
              GitHub
            </div>
          </a>
          <a href={site} target='_blank' rel='noreferrer noopener'>
            <div className='text-slate bg-aqua hover:bg-teal mx-2 h-9 w-24 rounded-md border border-transparent py-1 hover:text-white'>
              Site
            </div>
          </a>
        </div>
      </div>
      <p className='my-2 text-justify'>{description}</p>
      <h3 className='my-1 border-b-2 text-lg font-semibold text-white'>
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
