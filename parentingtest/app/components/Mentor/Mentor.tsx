// MENTORS DATA

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    color: string;
    description: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Senior Psychologist',
        href: '#',
        imageSrc: '/assets/mentor/main-ph.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Kalyani Bhabad',
        description: 'Kalyani Bhabad is a senior psychologist & educationist with 18+ years of experience in counseling, psychology, Consultancy and Therapy. <br />M.A. (Psychology), B.H.Sc (Child Psychology), Post Graduation in Child & Family Counseling, Diploma in Remedial Teaching, Flower Medicines'
    },
   
]

const Mentor = () => {
    return (
        <div
            id="mentors-section"
            className="relative z-10 mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mb-40"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
                    Meet the Mentor
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Section: Image with Caption */}
                <div className="flex flex-col items-center">
                    <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-md">
                        <img
                            src={products[0].imageSrc}
                            alt={products[0].imageAlt}
                            className="object-cover w-full h-70 sm:h-96"
                        />
                    </div>
                    <div className="mt-4 bg-white p-4 text-center rounded-lg shadow w-full max-w-md">
                        <h3 className="text-xl font-bold text-gray-800">{products[0].name}</h3>
                        <p className="text-lg text-gray-600">{products[0].color}</p>
                    </div>
                </div>
                {/* Right Section: Description */}
                <div>
                    <div className="bg-purple-50 p-6 rounded-md border border-purple-200 shadow-inner">
                        <p
                            className="text-base text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: products[0].description }}
                        />
                    </div>
                    {/* Centered Button */}
                    <div className="mt-8 text-center">
                        <button className="bg-purple text-white font-medium py-3 px-6 rounded shadow-lg hover:bg-purple-700">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor;
