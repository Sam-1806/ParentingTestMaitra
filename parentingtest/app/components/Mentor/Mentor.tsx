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
        imageSrc: '/assets/mentor/boy1.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Kalyani Bhabad',
        description: 'Kalyani Bhabad is a senior psychologist with 10+ years of experience in counseling, psychology, Consultancy and Therapy. <br />M.A. (Psychology), Director B.H.Sc (Child Psychology), PG in Child & Family Counseling, Dip in Remedial Teaching, Dip. in Flower Medicines.'
    },
   
]

const Mentor = () => {
    return (
            <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center mb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Meet with our Mentor</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                            Book a Consultation
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-center ">
                                <div>
                                    <div className='border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow'>
                                        <h3 className="text-sm text-gray-700 text-center">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="mt-3 text-2xl font-semibold text-offblack text-center">{product.color}</p>
                                </div>
                            </div>
                            <div className="mt-6 bg-purple-50 p-4 rounded-md border border-purple-200 shadow-inner">
                            <p className="text-sm text-gray-700 leading-relaxed"
                               dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>

                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Mentor;