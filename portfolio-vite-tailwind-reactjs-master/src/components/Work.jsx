import React from 'react';
import WorkItem from './WorkItem';
import WorkSite from '../assets/HC.png'

const data = [
  {
    year: 2023,
    title: 'Hospital das Clinicas',
    duration: '1 ano',
    details:
      'O projeto com o Hospital da Clinicas consiste em uma animação 3D para óculos de realidade virtual (VR) desenvolvida para distrair e entreter crianças durante procedimentos médicos, como exames de sangue. A animação imersiva cria um ambiente virtual que se sincroniza com as ações do mundo real, permitindo que a criança interaja com a experiência de forma significativa.',
  }
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-8 py-25'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Trabalhos</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
      <img src={WorkSite}></img>
    </div>
  );
};

export default Work;
