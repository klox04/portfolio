import Image from 'next/image';
import { useState } from 'react';

const Projects = () => {
  const [showModalgala, setShowModalgala] = useState(false);
  const [showModalfit, setShowModalfit] = useState(false);
  const [showModalwed, setShowModalwed] = useState(false);
  const [showModalmjm, setShowModalmjm] = useState(false);

  const galaclick = () => {
    setShowModalgala(true);
  };
  const fitclick = () => {
    setShowModalfit(true);
  };
  const weather = () => {
    setShowModalwed(true);
  };
  const mjmclick = () => {
    setShowModalmjm(true);
  };
  const galaClose = () => {
    setShowModalgala(false);
  };
  const fitClose = () => {
    setShowModalfit(false);
  };
  const weatherClose = () => {
    setShowModalwed(false);
  };
  const mjmClose = () => {
    setShowModalmjm(false);
  };
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h3 className="text-4xl font-bold text-white mt-4 mb-2">
        -Projects
      </h3>
      <div className="grid grid-cols-2 rounded-lg md:grid-cols-4 gap-5">
        <div className="rounded-xl bg-white shadow-lg shadow-gray-300">
          <div className="flex flex-row overflow-x-scroll mt-2">
            <Image
              src="/images/gala1.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/gala2.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/gala3.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/gala4.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
             <Image
              src="/images/gala5.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
             <Image
              src="/images/gala6.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
          </div>
          <div className="p-4">
            <h5 className="text-xl font-semibold font-manrope text-gray-900 mb-2">
              Gala place
            </h5>
            <p className="text-sm font-medium text-gray-600 line-clamp-2">
            Gala Place is an application where if you’re planning a trip within the Philippines you can check out a wonderful journey that you didn’t discover yet. 
            Tour maps are also needed by the people to check what place is wonderful to trip or enjoy bonding with your family, friends, etc.
            </p>
            <button 
            onClick={galaclick}
            className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
            cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
            hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
          </div>
        </div>
        {showModalgala && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2">
          <div className="flex flex-row overflow-x-scroll">
            <Image
              src="/images/gala1.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/gala2.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/gala3.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/gala4.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
             <Image
              src="/images/gala5.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
             <Image
              src="/images/gala6.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
          </div>
            <h2 className="text-2xl font-bold mb-4">Gala place</h2>
            <p className="text-gray-700">
              Gala Place is an mobile application where if you’re planning a trip within the Philippines you can check out a wonderful journey that you didn’t discover yet. 
              Tour maps are also needed by the people to check what place is wonderful to trip or enjoy bonding with your family, friends, etc.
            </p>
            <p className='mt-2 text-gray-700'>
            I work this final project in the subject of adv101
            </p>
            <p className='mt-2 text-gray-700'>
            The Objectives of Gala Place is a map application which aims to provide
             some info of the place to check what things that they need to know.

            </p>
            <button 
              onClick={galaClose}
              className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
              cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
              hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'>
              Close
            </button>
          </div>
        </div>
      )}
        <div className="rounded-xl bg-white shadow-lg shadow-gray-300">
        <div className="flex flex-row overflow-x-scroll mt-2">
            <Image
              src="/images/fit.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/fit1.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/fit2.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/fit3.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
             <Image
              src="/images/fit4.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
          </div>
          <div className="p-4">
            <h5 className="text-xl font-semibold font-manrope text-gray-900 mb-2">
              Fitness Calculators
            </h5>
            <p className="text-sm font-medium text-gray-600 line-clamp-2">
            A fitness calculator app is a mobile or web application designed to help users track and improve their 
            physical health and fitness levels. These apps typically offer a range of tools and features, including:
            </p>
            <button 
           onClick={fitclick}
            className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
            cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
            hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
          </div>
          {showModalfit&& (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2">
          <div className="flex flex-row overflow-x-scroll mt-2">
            <Image
              src="/images/fit.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/fit1.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/fit2.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/fit3.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
             <Image
              src="/images/fit4.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
          </div>
            <h2 className="text-2xl font-bold mb-4">Fitness Calculators</h2>
            <p className="text-gray-700">
            A fitness calculator app is a mobile application to help users track and improve their 
            physical health and fitness levels. These apps typically offer a range of tools and features, including:
            </p>
            <ul className='text-gray-700 mt-2'>
              <li>BMI Calculator</li>
              <li>Calories Calculator</li>
              <li>BMR Calculator</li>
              <li>LBM Calculator</li>
              </ul>  
            <button 
              onClick={fitClose}
              className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
              cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
              hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'>
              Close
            </button>
          </div>
        </div>
      )}
        </div>
        <div className="rounded-xl bg-white shadow-lg shadow-gray-300">
        <div className="flex flex-row overflow-x-scroll mt-2">
            <Image
              src="/images/we.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/we1.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/we2.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/we3.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
           
          </div>
          <div className="p-4">
            <h5 className="text-xl font-semibold font-manrope text-gray-900 mb-2">
              Weather App
            </h5>
            <p className="text-sm font-medium text-gray-600 line-clamp-2">
            A weather app API one of our Activities in PF101 it integrate weather data into the applications. These APIs provide access to various weather-related information, 
            which can be used to display current weather conditions, forecasts, and other meteorological data within an app. 
            </p>
            <button 
           onClick={weather}
            className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
            cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
            hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
          </div>
          {showModalwed&& (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2">
          <div className="flex flex-row overflow-x-scroll mt-2">
            <Image
              src="/images/we.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/we1.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/we2.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
            <Image
              src="/images/we3.jpg"
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover hover:transition duration-500 hover:scale-125"
            />
           
          </div>
            <h2 className="text-2xl font-bold mb-4">  
            Weather App</h2>
            <p className="text-gray-700">
            A weather app API one of our Activities in PF101 it integrate weather data into the applications. These APIs provide access to various weather-related information, 
            which can be used to display current weather conditions, forecasts, and other meteorological data within an app. 
            </p>
            <button 
              onClick={weatherClose}
              className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
              cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
              hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'>
              Close
            </button>
          </div>
        </div>
      )}

        </div>
        <div className="flex flex-col justify-end rounded-xl bg-white shadow-lg shadow-gray-300">
        <div className="flex flex-row overflow-x-scroll mt-2 ">
            <Image
              src="/images/proj.png"
              alt="Profile Image"
              width={1000}
              height={1000}
              className=" hover:transition duration-500 hover:scale-125"
            />
            <Image
                 src="/images/proj1.png"
              alt="Profile Image"
              width={1000}
              height={1000}
              className="hover:transition duration-500 hover:scale-125"
            />
            <Image
               src="/images/proj2.png"
              alt="Profile Image"
              width={1000}
              height={1000}
              className=" hover:transition duration-500 hover:scale-125"
            />
            <Image
               src="/images/proj3.png"
              alt="Profile Image"
              width={1000}
              height={1000}
              className="hover:transition duration-500 hover:scale-125"
            />
             <Image
               src="/images/proj4.png"
              alt="Profile Image"
              width={1000}
              height={1000}
              className="hover:transition duration-500 hover:scale-125"
            />
             <Image
               src="/images/proj5.png"
              alt="Profile Image"
              width={1000}
              height={1000}
              className="hover:transition duration-500 hover:scale-125"
            />
             <Image
               src="/images/proj6.png"
              alt="Profile Image"
              width={1000}
              height={1000}
              className="hover:transition duration-500 hover:scale-125"
            />
           
          </div>
          <div className="p-4">
            <h5 className="text-xl font-semibold font-manrope text-gray-900 mb-2">
              MJM Billing System
            </h5>
            <p className="text-sm font-medium text-gray-600 line-clamp-2">
            MJM billing System will improve the current system of the MJM Grand land consultancy. The major goal of this idea is to move away from the old-fashioned way of billing and hiding buyer’s information that can be lost at any time to a more easy and safe method of billing and data storage using computers. Having this method in place will significantly minimize the amount of space taken up by the tables and papers needed in manual processing. The amount of space needed to store  a buyer’s record would be reduced  as well, since computers, unlike traditional papers, can manage large amounts of data. 
            The system would record if a certain buyers  had paid their monthly payment and many more transaction  process  in the  company 
            </p>
            <button 
            onClick={mjmclick}
            className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
            cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
            hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
          </div>
          {showModalmjm&& (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-3/4">
          <div className="flex flex-row overflow-x-scroll mt-2 ">
            <Image
              src="/images/proj.png"
              alt="Profile Image"
              width={500}
              height={500}
              className=" hover:transition duration-500 hover:scale-125"
            />
            <Image
                 src="/images/proj1.png"
              alt="Profile Image"
              width={500}
              height={500}
              className="hover:transition duration-500 hover:scale-125"
            />
            <Image
               src="/images/proj2.png"
              alt="Profile Image"
              width={500}
              height={500}
              className=" hover:transition duration-500 hover:scale-125"
            />
            <Image
               src="/images/proj3.png"
              alt="Profile Image"
              width={500}
              height={500}
              className="hover:transition duration-500 hover:scale-125"
            />
             <Image
               src="/images/proj4.png"
              alt="Profile Image"
              width={500}
              height={500}
              className="hover:transition duration-500 hover:scale-125"
            />
             <Image
               src="/images/proj5.png"
              alt="Profile Image"
              width={500}
              height={500}
              className="hover:transition duration-500 hover:scale-125"
            />
             <Image
               src="/images/proj6.png"
              alt="Profile Image"
              width={500}
              height={500}
              className="hover:transition duration-500 hover:scale-125"
            />
           
          </div>
            <h2 className="text-2xl font-bold mb-4">  
            MJM Billing System</h2>
            <p className="text-gray-700">
            MJM billing System will improve the current system of the MJM Grand land consultancy. The major goal of this idea is to move away from the old-fashioned way of billing and hiding buyer’s information that can be lost at any time to a more easy and safe method of billing and data storage using computers. Having this method in place will significantly minimize the amount of space taken up by the tables and papers needed in manual processing. The amount of space needed to store  a buyer’s record would be reduced  as well, since computers, unlike traditional papers, can manage large amounts of data. 
            The system would record if a certain buyers  had paid their monthly payment and many more transaction  process  in the  company 
            </p>
            <button 
              onClick={mjmClose}
              className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
              cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
              hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'>
              Close
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
