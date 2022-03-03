const SkillsCard = (props) => {
  const title = props.title;
  const skills = props.skills || [];

  return (
    <div className='border-aqua bg-teal m-9 flex h-72 w-60 flex-col rounded-lg border-2 p-2'>
      <h3 className='mb-3 text-2xl font-bold underline'>{title}</h3>
      {skills.map((skill) => {
        return (
          <h5 key={skill} className='text-slate m-1 text-xl'>
            {skill}
          </h5>
        );
      })}
    </div>
  );
};

export default SkillsCard;
