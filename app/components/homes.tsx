'use client';
import Image from 'next/image';

const Home = () => {
  const resume = () => {
    if (typeof window !== 'undefined') {
      window.open('https://drive.google.com/file/d/11yxY1IrmO1zp_fNODKWttLhtTrXU55zJ/view', '_blank');
    }
  };
  const facebook = () => {
    if (typeof window !== 'undefined') {
      window.open('https://www.facebook.com/profile.php?id=100010598835592', '_blank');
    }
  };
  const github = () => {
    if (typeof window !== 'undefined') {
      window.open('https://github.com/klox04', '_blank');
    }
  };
  const linkin = () => {
    if (typeof window !== 'undefined') {
      window.open('https://www.linkedin.com/in/daniel-caralos-006069284/', '_blank');
    }
  };
  const insta = () => {
    if (typeof window !== 'undefined') {
      window.open('https://www.instagram.com/dnlbcrls/', '_blank');
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-1">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hello, It&apos;s Me</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Daniel Caralos</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">And I&apos;m a <span className="text-[#63e]"> Web Developer</span></h3>
          <p className="text-gray-400 text-lg mb-6">
            I&apos;m Daniel Caralos. An aspiring and passionate Developer based on Davao City, Philippines.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a href="#"  
              className='border-2 border-white rounded-full hover:transition duration-500 hover:scale-125'>
              <Image
                src="/images/icons8-facebook-48.png" 
                alt="facebook"
                onClick={facebook}
                width={50}
                height={50}
              />
            </a>
            
            <a href="#"  
              className='bg-white border-2 border-white rounded-full hover:transition duration-500 hover:scale-125'>
              <Image
                src="/images/icons8-github-50.png" 
                alt="github"
                width={50}
                height={50}
                onClick={github}
              />
            </a>
            <a href="#"  
              className='border-2 border-white rounded-full hover:transition duration-500 hover:scale-125'>
              <Image
                src="/images/icons8-linkedin-circled-48.png" 
                alt="linkedin"
                onClick={linkin}
                width={50}
                height={50}
              />
            </a>
            <a href="#"  
              className='bg-white border-2 border-white rounded-full hover:transition duration-500 hover:scale-125'>
           <Image
                src="/images/insta.jpg"
                alt="Instagram"
                width={50}
                height={50}
                className='rounded-full'
              />
            </a>
          </div>
          <button 
            type='button' 
            onClick={resume}
            className="px-6 py-3 bg-[#63e] text-white font-bold rounded-full hover:transition duration-500 hover:scale-125"
          >
            Download Resume
          </button>
        </div>
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full overflow-hidden bg-[#63e]">
            <Image
            onClick={insta}
              src="/images/file-removebg.png" 
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-8 border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
