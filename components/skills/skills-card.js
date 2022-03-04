const SkillsCard = (props) => {
  const title = props.title;
  const skills = props.skills;

  return (
    <div className='border-aqua m-3 flex h-80 w-60 flex-col rounded-lg border-2 bg-black p-3 lg:m-9'>
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
