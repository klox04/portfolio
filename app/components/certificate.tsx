import Image from 'next/image';

const Certificates = () => {
  const certificates = [
    { 
    src: '/images/cert.png', 
    alt: 'Certificate 1',
    title: 'CAPSTONE PROJECT 1 WORKSHOP', 
    insti: 'HOLLY CROSS OF DAVAO COLLEGE',
    year: '2023' },
    { 
    src: '/images/cert1.png',
    alt: 'Certificate 2',
    title:'INTERFACING WITH ARDUINO', 
    insti: 'HOLLY CROSS OF DAVAO COLLEGE',
    year: '2023'},
    { 
    src: '/images/cert2.png', 
    alt: 'Certificate 3', 
    title: 'MACHINE LEARNING OVERVIEW AND ITS APPLICATION',
    insti: 'HOLLY CROSS OF DAVAO COLLEGE',
    year: '2023'},
    { 
    src: '/images/cert4.png',
    alt: 'Certificate 5',
    title: 'JAVASCRIPT FUNDAMENTALS',
    insti: 'UDEMY',
    year:'2024'  },
    { 
        src: '/images/cert5.png',
        alt: 'Certificate 4',
        title: 'COMPLETE MYSQL BOOTCAMP',
        insti: 'UDEMY',
        year:'2024'  },
        { 
            src: '/images/cert6.png',
            alt: 'Certificate 6',
            title: 'PYTHON BOOTCAMP FOR BEGINNER',
            insti: 'UDEMY',
            year:'2024'  },
    { src: '/images/cert3.png', alt: 'Certificate 4' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-4xl font-bold text-white mb-8">
        - Certificates
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="relative group rounded-xl bg-white transform transition-transform duration-500 hover:scale-105"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Image
              src={certificate.src}
              alt={certificate.alt}
              layout="responsive"
              width={100}
              height={75}
              className="object-cover rounded-xl"
            />
              <p className="text-gray-700 font-bold px-4">{certificate.title}</p>
              <p className="text-gray-700 font-bold px-4">{certificate.insti}</p>
              <p className="text-gray-700 font-bold px-4">{certificate.year}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
