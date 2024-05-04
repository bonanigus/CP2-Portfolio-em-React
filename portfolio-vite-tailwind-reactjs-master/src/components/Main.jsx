import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover '
        src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl front-bold text-gray-800'>
            Nós Somos Authenticals
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            Nós somos
            <TypeAnimation
              sequence={[
                'Desenvolvedores', 
                2000, 
                'Programadores', 
                2000, 
                'Entusiastas da tecnologia', 
                2000, 
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-9 max-w-[100px] w-full'>
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
