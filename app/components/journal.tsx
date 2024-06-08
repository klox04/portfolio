import { useState, useEffect } from 'react';
import Image from 'next/image';

const Journal = () => {
    const images = [
        "/images/DSC03436.JPG",
        "/images/jour2.jpg",
        "/images/jour3.jpg",
    ];
  

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModalFeb, setShowModalfeb] = useState(false);
    const [showModalApril, setShowModalapril] = useState(false);
    const [showModalMay, setShowModalmay] = useState(false);

    const febclick = () => {
        setShowModalfeb(true);
    };
    const febClose = () => {
        setShowModalfeb(false);
    };
    const aprilclick = () => {
        setShowModalapril(true);
    };
    const aprilClose = () => {
        setShowModalapril(false);
    };
    const mayclick = () => {
        setShowModalmay(true);
    };
    const mayClose = () => {
        setShowModalmay(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    const currentImage = images[currentIndex];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h3 className="text-4xl font-bold text-white mb-8">
                - Journal
            </h3>
            <div className="flex flex-row items-center gap-8">
                <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="w-full h-64 relative">
                        <Image
                            src= "/images/jour.jpg" 
                            alt="Journal Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-xl"
                        />
                    </div>
                    <div className="p-6">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">MY JOURNAL</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">My Amazing Journey</a>
                        <p className="mt-2 text-gray-500 line-clamp-4">
                            During the 1st week of February, I focused on setting up my work environment and getting acquainted with the office procedures and systems. This was a time of familiarization and adjustment as I settled into my role. Moving into the second week, my main objective was to dive into learning Laravel, a popular PHP framework, and Vue.js for front-end development. I dedicated my time to studying and understanding the intricacies of Laravel, which is commonly used for web development projects. This period was filled with reading documentation, watching tutorials, and practicing hands-on exercises to gain proficiency in the framework.
                            As I progressed through the second week, I was given tasks to apply what I had learned. These assignments were likely related to my ongoing studies at school and my responsibilities within the office. This practical application allowed me to solidify my knowledge and skills in Laravel while also contributing to the work being done, I continued to perform my usual tasks and responsibilities in the office. 
                        </p>
                        <button 
                        onClick={febclick}
                        className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
                        cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
                        hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
                    </div>
                    {showModalFeb && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center   z-50">
                            <div className="bg-white rounded-lg p-6 w-5/6 relative">
                                <div className="w-full h-80 relative mb-4">
                                    <Image
                                        src= "/images/jour.jpg" 
                                        alt="Journal Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-xl"
                                    />
                                </div>
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">MY JOURNAL</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">My Amazing Journey</a>
                                <p className="mt-2 text-gray-500 ">
                                    During the 1st week of February, I focused on setting up my work environment and getting acquainted with the office procedures and systems. This was a time of familiarization and adjustment as I settled into my role. 
                                    Moving into the second week, my main objective was to dive into learning Laravel, a popular PHP framework, and Vue.js for front-end development.
                                    I dedicated my time to studying and understanding the intricacies of Laravel, which is commonly used for web development project 
                                    In the last week of March, I continued to perform my usual tasks and responsibilities in the office. 
                                    Overall, during the weeks spanning from the third week of March to the end of the month, I set up my work environment, learned Laravel, applied my knowledge to tasks at school and work, and continued with my regular office duties.
                                </p>
                                <button 
              onClick={febClose}
              className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
              cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
              hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'>
              Close
            </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="w-full h-64 relative">
                        <Image
                            src= "/images/jour1.jpg" 
                            alt="Journal Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-xl"
                        />
                    </div>
                    <div className="p-6">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">MY JOURNAL</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">My Amazing Journey</a>
                        <p className="mt-2 text-gray-500 line-clamp-4">
                        In April, I focused on developing still  for our client under Sir lance guidance. I implemented other features for users, 
                                ensuring thhat the feauteres is wants by the client. I also expanded my skills with Laravel Eloquent Spatie\QueryBuilder and improved controller readability. 
                                Overall, it was a productive month of development and effective team collaboration toward achieving project milestones.
                        </p>
                        <button 
                        onClick={aprilclick}
                        className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
                        cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
                        hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
                    </div>
                    {showModalApril && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg p-6 w-5/6  relative">
                                <div className="w-full h-64 relative mb-4">
                                    <Image
                                        src= "/images/jour1.jpg" 
                                        alt="Journal Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-xl"
                                    />
                                </div>
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">MY JOURNAL</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">My Amazing Journey</a>
                                <p className="mt-2 text-gray-500 ">
                                In April, I focused on developing still  for our client under Sir lance guidance. I implemented other features for users, 
                                ensuring thhat the feauteres is wants by the client. I also expanded my skills with Laravel Eloquent Spatie\QueryBuilder and improved controller readability. 
                                Overall, it was a productive month of development and effective team collaboration toward achieving project milestones.
                                </p>
                                <button 
              onClick={aprilClose}
              className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
              cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
              hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'>
              Close
            </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="w-full h-64 relative">
                        <Image
                            src={currentImage}
                            alt="Journal Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-xl"
                        />
                    </div>
                    <div className="p-6">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">MY JOURNAL</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">My Amazing Journey</a>
                        <p className="mt-2 text-gray-500 line-clamp-4">
                        In May, my main focus was completing the creation of a project called StillGood, ensuring all planned activities were organized. Additionally, I played a significant role in developing features for another project, including TFW and others.
                        Overall, my experience at INFOSOFT has been invaluable.  Now, I would confidently rate myself at 80% proficiency in frontend development.
                        </p>
                        <button 
                        onClick={mayclick}
                        className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
                        cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
                        hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
                    </div>
                    {showModalMay && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg p-6 w-5/6  relative">
                                <div className="w-full h-64 relative mb-4">
                                    <Image
                                        src={currentImage}
                                        alt="Journal Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-xl"
                                    />
                                </div>
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">MY JOURNAL</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">My Amazing Journey</a>
                                <p className="mt-2 text-gray-500 ">
                                In May, my main focus was completing the creation of a project called StillGood, ensuring all planned activities were organized. Additionally, I played a significant role in developing features for another project, including TFW and others.
                                Overall, my experience at INFOSOFT has been invaluable.  Now, I would confidently rate myself at 80% proficiency in frontend development.
                                </p>
                                <button 
              onClick={mayClose}
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
}

export default Journal;
