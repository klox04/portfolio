import Image from 'next/image';

const Journal = () => {
    const entries = [
        {
            imgSrc: "/images/DSC03436.JPG",
            title: "Journal Entry",
            heading: "My Amazing Journey",
            description: "It was an amazing experience full of adventure and learning. Here, I share some of the highlights and insights from our teambuilding with co-intern."
        },
        {
            imgSrc: "/images/DSC03500.JPG",
            title: "Journal Entry",
            heading: "My Amazing Journey",
            description: "This is a brief description of my journey. It was an amazing experience full of adventure and learning. Here, I share some of the highlights and insights from my travels."
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-4xl font-bold text-white mb-8">
          - Journal
        </h3>
        <div className="grid grid-cols-1">
            {entries.map((entry, index) => (
                <div key={index} className="md:flex mb-4 bg-white rounded-xl"
                data-aos="fade-up"
     data-aos-duration="3000">
                    <div className="md:flex-shrink-0">
                        <Image
                            src={entry.imgSrc}
                            alt={entry.title}
                            width={400}
                            height={400}
                            className='rounded-l-xl'
                           
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{entry.title}</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{entry.heading}</a>
                        <p className="mt-2 text-gray-500">{entry.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Journal;
