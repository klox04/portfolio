import Image from 'next/image';
const About = () => {
    const skills = [
      { name: 'WEB DESIGN', level: '80%' },
      { name: 'C#', level: '30%' },
      { name: 'JAVA', level: '30%' },
      { name: 'LARAVEL', level: '40%' },
      { name: 'CSS TAILWIND', level: '80%' },
      { name: 'EXCEL', level: '90%' },
      { name: 'MS OFFICE', level: '80%' },
      { name: 'vue.js', level: '60%' },
    ];
  
    return (
      <section className="">
        <div className="max-w-6xl mx-auto px-6"
         data-aos="fade-up"
         data-aos-anchor-placement="top-center">
          <h2 className="text-4xl font-bold text-white mt-4 mb-2 text-center uppercase">About me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-25 h-auto bg-[#63e] rounded-lg ">
            <Image
              src="/images/file-removebgs.png" 
              alt="Profile Image"
              width={300}
              height={300}
            />
            </div>
            <div className='flex justify-center place-items-center container mx-auto px-0 md:px-4'
            >
              <p className='text-white text-gray-400 uppercase'>
              I am from S.I.R New matina Davao city, I graduated SHS in PWC College of Davao with the strand of Computer programming. 
              I am familiarity with the programming languages such as C++, Java, C# and ability to write, read and understand code and 
              ability in creating, formatting, analyzing data using spreadsheet applications. I have a work experience in MJM real Estate company 
              about 10 months. I am technical assistant of their office at same time a encoders of their data.
              </p>
            </div>
            </div>
            <div>
              <h2 className='text-4xl font-bold text-white mt-2 mb-3 text-center uppercase'>
                Teck Stack
              </h2>
              <div className="relative flex items-center justify-center gap-2"
              >

      <div className=" shadow-lg h-auto w-auto hover:transition duration-500 hover:scale-125 "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/c++.png" 
              alt="Profile Image"
              width={100}
              height={100}
              className='rounded-lg'
            />
      </div>
      <div className="shadow-lg rounded-lg bg-white h-auto w-auto hover:transition duration-500 hover:scale-125 "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/icons8-java-50.png" 
              alt="Profile Image"
              width={100}
              height={100}
            />
      </div>
      <div className="  shadow-lg  h-auto w-auto hover:transition duration-500 hover:scale-125"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/csharp.png" 
              alt="Profile Image"
              width={100}
              height={100}
              className='rounded-lg'
            />
      </div>
      <div className="shadow-lg  h-auto w-auto hover:transition duration-500 hover:scale-125"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/vuejs.png" 
              alt="Profile Image"
              width={100}
              height={100}
              className='rounded-lg'
            />
      </div>
      <div className="shadow-lg  h-auto w-auto hover:transition duration-500 hover:scale-125 "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/tailwind.jpeg" 
              alt="Profile Image"
              width={100}
              height={100}
              className='rounded-lg'
            />
      </div>
      <div className="shadow-lg  h-auto w-auto hover:transition duration-500 hover:scale-125"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/rea.png" 
              alt="Profile Image"
              width={100}
              height={100}
              className='rounded-lg'
              
            />
      </div>
      <div className="shadow-lg  h-auto w-auto hover:transition duration-500 hover:scale-125"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/html.png" 
              alt="Profile Image"
              width={100}
              height={100}
              className='rounded-lg'
              
            />
      </div>
      <div className="shadow-lg bg-white rounded-lg h-auto w-auto hover:transition duration-500 hover:scale-125"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Image
              src="/images/CSS.png" 
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
            />
      </div>
      </div>
            </div>
          {/*   <div className="flex flex-col mt-2 gap-8">

      <div className="mb-2 grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="">
            <h4 className="text-white text-lg mb-1">{skill.name}</h4>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className="bg-[#63e] h-6 rounded-full text-right pr-2 text-white font-bold"
                style={{ width: skill.level }}
              >
                {skill.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}
         
        </div>
      </section>
    );
  };
  
  export default About;
  