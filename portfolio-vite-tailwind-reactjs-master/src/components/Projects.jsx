import React from 'react';
import ProjectItem from './ProjectItem';
import sportsImg from '../assets/sports-shop.jpg';
import travelImg from '../assets/airbnb-clone.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projetos
      </h1>
      <p className='text-center py-8'>
        Durante sua breve existência, a Authenticals sempre se dedicou ao máximo em suas criações que, embora sejam poucas,
        exibem a habilidade e maior qualidade de todos os membros de nossa equipe.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={sportsImg} title='E-commerce de Esportes' />
        <ProjectItem img={travelImg} title='Clone AirBnB' />
      </div>
    </div>
  );
};

export default Projects;
