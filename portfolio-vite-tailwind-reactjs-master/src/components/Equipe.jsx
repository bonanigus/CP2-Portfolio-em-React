import React from 'react';
import Dani from '../assets/dani.jpg'
import Bonani from '../assets/eu.jpg'
import Gu from '../assets/gu melhor.jpg'
import Leo from '../assets/leo.jpg'
import Vini from '../assets/tampa.jpg'

const Equipe = () => {
    return (
        <div id='team' className='m-10'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Conheça nossa Equipe</h1>
           <div id='Daniel' className='flex flex-col justify-center items-center'>
                <img className = 'w-52 m-10' src={Dani}></img>
                <h3 className='text-2xl font-bold text-center text-[#001b5e]'>Daniel Wahba Krasilchik</h3>
                <p>O coração da equipe, o homem que nos segura juntos até o final.</p>
                <p>Super diligente com nossos processos, proficiente em Python e compentente em front-end.</p>
           </div>
           <div id ='Gustavo Bonani' className='flex flex-col justify-center items-center'>
                <img className = 'w-52 m-10' src={Bonani}></img>
                <h3 className='text-2xl font-bold text-center text-[#001b5e]'>Gustavo Bonani Favero Marcos</h3>
                <p>Toda equipe precisa ter um cabeça, e é esse cara que fez o serviço.</p>
                <p>é competente em Python, HTML e CSS, e faz a equipe ir pra frente. </p>
           </div>
           <div id='Gustavo Felex' className='flex flex-col justify-center items-center'>
                <img className = 'w-52 m-10' src={Gu}></img>
                <h3 className='text-2xl font-bold text-center text-[#001b5e]'>Gustavo Manganelli Felex</h3>
                <p>De algum jeito, ele consegue fazer qualquer projeto ser divertido de fazer, mantém a nossa</p>
                <p>sanidade nos momentos de crise.</p>
           </div>
           <div id='Leonardo' className='flex flex-col justify-center items-center'>
                <img className = 'w-52 m-10' src={Leo}></img>
                <h3 className='text-2xl font-bold text-center text-[#001b5e]'>Leonardo Rodrigues Amzehnhoff</h3>
                <p>Se o Dani é o coração da equipe, o Leo é o cérebro. Consegue cuidar de toda a parte operacional sozinho</p>
                <p>e ainda deixa o resto da equipe na saudade. Proficiente em tudo, é impressionante o tanto que ele faz.</p> 
                <p>Não teríamos chegado tão longe sem ele.</p>
           </div>
           <div id='Vinicius' className='flex flex-col justify-center items-center'>
                <img className = 'w-52 m-10' src={Vini}></img>
                <h3 className='text-2xl font-bold text-center text-[#001b5e]'>Vinicius Issa Gois</h3>
                <p>Esse é o cara que ata as pontas soltas, não se destaca mas faz de tudo um pouco.</p>
           </div>
        </div>
    )
}
export default Equipe