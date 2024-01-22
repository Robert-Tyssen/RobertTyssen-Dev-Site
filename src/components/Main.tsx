import Image from 'next/image';
import React from 'react';

const Main = () => {

  return (
    <div className='w-full h-screen'>
      <div className=' p-4 pt-[200px] flex flex-wrap space-x-4 space-y-4 justify-center items-center'>
        <Image
          className='rounded-full pf width-full max-w-[620px]'
          src='/assets/robert-headshot.jpg'
          width={350}
          height={350}
          alt='Robert Tyssen Photo'
        />
        <div className='text-left max-w-[620px]'>
          <h1>Robert Tyssen</h1>
          <h2 className='py-4'>Software Developer</h2>
          <p className='py-2'>
            I am a dedicated developer and tech enthusiast with over 8 years
            of experience in engineering, software development, and
            consulting. I have a strong passion for learning and staying
            up-to-date with emerging technologies and industry trends. My
            objective is to contribute my expertise to develop high-quality,
            innovative products and services, collaborating with a motivated
            and diverse team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;