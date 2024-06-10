import React from 'react';
import Image from 'next/image';

const ContactMe = () => {
  const openLink = (url: string | URL | undefined) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center gap-3 w-80 h-80" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <Image
            src="/images/file-removebg.png"
            alt="Profile Image"
            width={300}
            height={400}
            className="bg-white rounded-lg"
          />
          <p className="text-3xl font-bold text-gray-400 text-center">Looking forward to work with everyone!</p>
        </div>
        <div className="text-center md:text-left md:w-1/2"data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase">Contact Me</h1>
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase">Email:</h4>
          <p className="text-gray-400 text-lg">daniel.caralos@hcdc.edu.ph</p>
          <p className="text-gray-400 text-lg">danielcaralos159@gmail.com</p>
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase">Phone:</h4>
          <p className="text-gray-400 text-lg">+9092627420</p>
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">Visit My Socials:</h4>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="#"
              onClick={() => openLink('https://www.facebook.com/profile.php?id=100010598835592')}
              className="border-2 border-white rounded-full transition duration-500 transform hover:scale-125"
            >
              <Image
                src="/images/icons8-facebook-48.png"
                alt="Facebook"
                width={50}
                height={50}
              />
            </a>
            <a
              href="#"
              onClick={() => openLink('https://github.com/klox04')}
              className="bg-white border-2 border-white rounded-full transition duration-500 transform hover:scale-125"
            >
              <Image
                src="/images/icons8-github-50.png"
                alt="GitHub"
                width={50}
                height={50}
              />
            </a>
            <a
              href="#"
              onClick={() => openLink('https://www.linkedin.com/in/daniel-caralos-006069284/')}
              className="border-2 border-white rounded-full transition duration-500 transform hover:scale-125"
            >
              <Image
                src="/images/icons8-linkedin-circled-48.png"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <a
              href="#"
              onClick={() => openLink('https://www.instagram.com/dnlbcrls/')}
              className=" transition duration-500 transform hover:scale-125"
            >
              <Image
                src="/images/insta.jpg"
                alt="Instagram"
                width={50}
                height={50}
                className='rounded-full'
              />
            </a>
          </div>
        </div>
      </div>

  );
};

export default ContactMe;
