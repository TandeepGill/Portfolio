import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = (props) => {
  return (
    <footer className='text-gray bg-black'>
      <div className='flex h-20 items-center justify-center'>
        <AiOutlineCopyrightCircle />
        <h3>2022 Tandeep Gill</h3>
      </div>
    </footer>
  );
};

export default Footer;
