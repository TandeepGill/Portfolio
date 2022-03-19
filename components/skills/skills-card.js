const SkillsCard = (props) => {
  const title = props.title;
  const skills = props.skills;

  return (
    <div className='border-aqua my-3 flex h-80 w-full flex-col rounded-lg border-2 bg-black p-3 text-center lg:m-9 lg:w-60'>
      <h3 className='mb-3 text-2xl font-bold'>{title}</h3>
      {skills.map((skill) => {
        return (
          <h5 key={skill} className='m-1 text-xl text-white'>
            {skill}
          </h5>
        );
      })}
    </div>
  );
};

export default SkillsCard;
