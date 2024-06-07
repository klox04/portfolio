import { useState, useEffect } from 'react';
import Image from 'next/image';

const Journal = () => {
    const images = [
        "/images/DSC03436.JPG",
        "/images/jour1.jpg",
        "/images/jour2.jpg"
    ];
    const images1 = [
        "/images/jour3.jpg",
        "/images/jour.jpg"
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
                            During the 1st week of February, I focused on setting up my work environment and getting acquainted with the office procedures and systems. This was a time of familiarization and adjustment as I settled into my role. Moving into the second week, my main objective was to dive into learning Laravel, a popular PHP framework, and Vue.js for front-end development. I dedicated my time to studying and understanding the intricacies of Laravel, which is commonly used for web development projects. This period was filled with reading documentation, watching tutorials, and practicing hands-on exercises to gain proficiency in the framework.
                            As I progressed through the second week, I was given tasks to apply what I had learned. These assignments were likely related to my ongoing studies at school and my responsibilities within the office. This practical application allowed me to solidify my knowledge and skills in Laravel while also contributing to the work being done, I continued to perform my usual tasks and responsibilities in the office. This period was characterized by maintaining productivity, collaborating with colleagues, and fulfilling my assigned duties. It can be inferred that I was engaged in a routine workflow, working on ongoing projects and completing my regular assignments.
                            Overall, during the weeks spanning from the third week of March to the end of the month, I set up my work environment, learned Laravel, applied my knowledge to tasks at school and work, and continued with my regular office duties.
                        </p>
                        <button 
                        onClick={febclick}
                        className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
                        cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
                        hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
                    </div>
                    {showModalFeb && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 relative">
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
                                    During the 1st week of February, I focused on setting up my work environment and getting acquainted with the office procedures and systems. This was a time of familiarization and adjustment as I settled into my role. Moving into the second week, my main objective was to dive into learning Laravel, a popular PHP framework, and Vue.js for front-end development. I dedicated my time to studying and understanding the intricacies of Laravel, which is commonly used for web development projects. This period was filled with reading documentation, watching tutorials, and practicing hands-on exercises to gain proficiency in the framework.
                                    As I progressed through the second week, I was given tasks to apply what I had learned. These assignments were likely related to my ongoing studies at school and my responsibilities within the office. This practical application allowed me to solidify my knowledge and skills in Laravel while also contributing to the work being done.
                                    In the last week of March, I continued to perform my usual tasks and responsibilities in the office. This period was characterized by maintaining productivity, collaborating with colleagues, and fulfilling my assigned duties. It can be inferred that I was engaged in a routine workflow, working on ongoing projects and completing my regular assignments.
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
                            in the month of April, my work primarily focused on developing CRUD functionality for the PPMP (Project Procurement Management Plan) as assigned by Sir Kent. I successfully implemented CRUD functions for users, end_users, and ppmp tables, and conducted thorough testing using Postman. I also resolved migration issues and ensured the correctness of foreign key relationships in the database. Collaborating with Team Leah, I engaged in data verification and confirmation, ensuring the accuracy of the information.
                            While working remotely, I continued to verify and confirm data with Team Leah, awaiting further instructions from my mentor. I also had a productive meeting with the Head of Engineering to establish clear goals and plan the next phase of the project. Additionally, I studied the Laravel Eloquent Spatie\QueryBuilder to enhance my skills. Throughout the month, I worked diligently on the back-end tasks, collaborating with Montera, who focused on the front end.
                            Continuing with my work, I completed the CRUD operations for positions and categories. Collaborating with John Henly Montera, I tested the functionality and resolved any issues that arose. I also expanded my knowledge of Spatie\QueryBuilder to further enhance my development skills. Testing the controllers thoroughly using Postman, I ensured the smooth operation of each process.
                            In the final weeks of April, I made revisions to the controllers, improving their readability for future developers. I fixed values, functions, and validations, and added pagination and sorting functionality for better user experience. I also worked on the CRUD operations for multiple independent tables and conducted extensive testing with John to guarantee their seamless performance.
                            In conclusion, the month of April was a period of productive work and collaboration. I successfully implemented CRUD functionality for various tables, resolved migration issues, and ensured the accuracy of data through verification and confirmation. I expanded my knowledge of Laravel Eloquent Spatie\QueryBuilder and focused on improving the controllers for better readability and performance. Overall, I made significant progress in the development of the PPMP and worked effectively with my team to achieve our goals.
                        </p>
                        <button 
                        onClick={aprilclick}
                        className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
                        cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
                        hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
                    </div>
                    {showModalApril && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 relative">
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
                            In the month of May, my primary focus was on completing the creation of a comprehensive Work Plan for the Procurement Department, ensuring that all planned activities and tasks were outlined and organized. In addition to this, I played a key role in creating CRUD (Create, Read, Update, Delete) functions for the ABP (Annual Budget Plan) submission process, contributing to the efficient management of budget-related activities.
                            During this time, I also created CRUD functions for BAC (Bids and Awards Committee) Resolution and enhanced the workability of the ORM (Organizational Resource Management) system. I actively participated in the analysis of procurement-related issues and offered valuable suggestions to improve the efficiency and transparency of the procurement process.
                            Moreover, I worked on updating and enhancing the existing procurement guidelines and procedures, ensuring compliance with relevant regulations and best practices. My contributions to the development of a more streamlined and transparent procurement system were instrumental in improving overall procurement operations within the organization.
                            To ensure the smooth execution of procurement activities, I actively engaged in cross-functional collaboration with various departments, providing necessary support and guidance on procurement-related matters. I utilized my knowledge and expertise to troubleshoot any issues that arose and implemented effective solutions to enhance the efficiency and effectiveness of the procurement process.
                            Overall, my dedication and commitment to creating comprehensive work plans, developing CRUD functions, analyzing procurement issues, updating guidelines, and collaborating with different departments significantly contributed to the successful execution of procurement activities in the month of May.
                        </p>
                        <button 
                        onClick={mayclick}
                        className='py-2.5 px-5 mt-2 text-xs bg-indigo-600 text-white rounded-full 
                        cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 
                        hover:bg-indigo-700 hover:transition duration-500 hover:scale-125'> Read More</button>
                    </div>
                    {showModalMay && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 relative">
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
