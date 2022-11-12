import React from 'react';

// import img
import Image from '../assets/img/about.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                David Robison
              </h2>
              <p className='mb-4 text-accent'>
                Front-end 
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                 Meu nome é David, tenho 30 anos e sou um desenvolvedor fullstack. Tenho projetos no meu github onde abordo projetos desde a parte do Back até o front. No momento estou me aprofundando em Javascript e React para desenvolver melhores projetos. Tenho um grande objetivo em entrar em uma boa empresa para ganhar mais experiência e me tornar um profissional no mercado. <br />
                <br />
                Sendo assim, estou disposto a aprender qualquer linguagem de programação.

                Estou sempre estudando, faça sol, faça chuva, me preparo para o mercado mas tenho desejos enormes em criar meus próprios aplicativos para comércios da minha cidade. Desejo e serei um fullstack, não pela nomenclatura, mas porque sou apaixonado pelo Back e o único jeito de mostrar isso é com o front, por isso serei um fullstack! 
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contate-me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
