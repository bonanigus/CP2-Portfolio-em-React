import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
        Contato
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Nome</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Telefone</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
          />
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Assunto</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Mensagem</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='10'
            name='message'
          ></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
