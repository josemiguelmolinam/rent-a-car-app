'use client';

import Image from 'next/image';

import { CustomButton } from '@/components';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Unleash the Drive - Rent Your Dream Car
        </h1>

        <p className='hero__subtitle'>
         Awaken the thrill behind the wheel and let the 
         luxury of our supercars transform your dreams 
          into unforgettable experiences.
        </p>

        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='gtr' fill className='object-contain' />
        </div>

        <div className='hero__image-overlay' />
      </div>
    </div>
  );
};

export default Hero;
