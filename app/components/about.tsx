
const About = () => {
    const skills = [
      { name: 'HTML / CSS', level: '83%' },
      { name: 'PHP / MySQL', level: '88%' },
      { name: 'WordPress', level: '75%' },
      { name: 'Graphic Design', level: '90%' },
    ];
  
    return (
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-500 mb-8 text-center">My Skills</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-500 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt Duis aute irure dolor in reprehenderit Lorem ipsum dolor
                sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt Duis
                aute irure dolor in reprehenderit.
              </p>
              <p className="text-gray-500 text-lg  mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt Duis aute irure dolor in reprehenderit.
              </p>
              <button className="mt-4 px-6 py-2 text-white border border-white rounded hover:bg-[#63e] hover:text-white transition duration-300">
                Contact Me
              </button>
            </div>
            <div className="md:w-1/2">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-gray-800 text-lg mb-1">{skill.name}</h4>
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
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  