import { TypeAnimation } from 'react-type-animation';

const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mobile Developer',
        1400, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1400, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX Designer',
        1400,
        'Graphic Designer',
        1400,
        'Programmer',
        1400
      ]}
      speed={50}
      repeat={Infinity}
      className='text-2xl md:text-3xl text-[#0ef] font-bold uppercase'
    />
  );
};

export default TypeEffect