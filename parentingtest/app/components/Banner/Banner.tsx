"use client"
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';


const Banner = () => {
    return (
        <main className='banner-image'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
                        Understand and Enhance <br /> Your Approach
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-black">
                        Gain clarity on your parenting strengths and areas for development with our expert-designed assessments
                        </p>
                    </div>
                   


                    {/* DROPDOWN BUTTONS */}


                    <div className="mx-auto max-w-xl mt-24 pt-6 pb-8 px-6 lg:px-4 bg-white rounded-lg boxshadow">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                            
                            
                            <div className="col-span-full mt-2 flex justify-center">
  <a href="/payments">
    <button className="bg-purple hover:bg-purple-700 text-white font-bold py-4 px-8 rounded">
      Start Parenting Style Test
    </button>
  </a>
</div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Banner;
