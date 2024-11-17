"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';


interface Name {
    course: string;
    imageSrc: string;
    profession: string
    price: string
    category: 'Parenting' | 'Career Guidance' | 'Family Counseling' | 'Apptitude testing';
}

const names: Name[] = [
    {
        course: 'Parenting Style Test',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Parenting Style, Behaviour Analysis',
        price: '750',
        category: 'Parenting'
    },
    {
        course: 'Apptitude Test',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Comprehensive Apptitude test, Career Choice',
        price: '21',
        category: 'Apptitude testing'
    },
    {
        course: 'Behavior Analysis Test',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'IQ, EQ, Personality testing',
        price: '21',
        category: 'Apptitude testing'
    },
    {
        course: 'External Behaviour Analysis',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Behavioural testing, Family Counseling',
        price: '99',
        category: 'Family Counseling'
    },
    {
        course: 'IQ testing',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'IQ Testing, Analysis',
        price: '89',
        category: 'Apptitude testing'
    },
    {
        course: 'Career Apptitude',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Apptitude and Career guidance based on that',
        price: '89',
        category: 'Career Guidance'
    },
    {
        course: 'Personality Test',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Type of personality testing',
        price: '69',
        category: 'Family Counseling'
    },
    {
        course: 'Child and Parenting Style',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Parenting Style, Child and Family Counseling',
        price: '69',
        category: 'Parenting'
    },
    {
        course: 'Stress Testing',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Family Counseling and stress testing',
        price: '99',
        category: 'Family Counseling'
    }
];

const NamesList = () => {

    const [selectedButton, setSelectedButton] = useState<'Parenting' | 'Apptitude testing' | 'Family Counseling' | 'Career Guidance' | 'all' | null>('Apptitude testing');

    const mobileDevelopment = names.filter((name) => name.category === 'Parenting');
    const webDevelopment = names.filter((name) => name.category === 'Apptitude testing');
    const dataScience = names.filter((name) => name.category === 'Family Counseling');
    const cloudComputing = names.filter((name) => name.category === 'Career Guidance');

    let selectedNames: Name[] = [];

    if (selectedButton === 'Parenting') {
        selectedNames = mobileDevelopment;
    } else if (selectedButton === 'Apptitude testing') {
        selectedNames = webDevelopment;
    } else if (selectedButton === 'Family Counseling') {
        selectedNames = dataScience;
    } else if (selectedButton === 'Career Guidance') {
        selectedNames = cloudComputing
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {name.course}
                    </div>
                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        ${name.price}
                    </div>
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                    {name.profession}
                </p>

                <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>12 Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ));


    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Popular Courses</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Explore Tests
                        </button>
                    </div>
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('Apptitude testing')} className={"bg-white " + (selectedButton === 'Apptitude testing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Apptitude testing</button>
                    <button onClick={() => setSelectedButton('Parenting')} className={"bg-white " + (selectedButton === 'Parenting' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Parenting</button>
                    <button onClick={() => setSelectedButton('Family Counseling')} className={"bg-white " + (selectedButton === 'Family Counseling' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Family Counseling</button>
                    <button onClick={() => setSelectedButton('Career Guidance')} className={"bg-white " + (selectedButton === 'Career Guidance' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Career Guidance</button>

                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon onClick={() => setSelectedButton('Apptitude testing')} width={70} height={70} className={"bg-white " + (selectedButton === 'Apptitude testing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <DevicePhoneMobileIcon onClick={() => setSelectedButton('Parenting')} width={70} height={70} className={"bg-white " + (selectedButton === 'Parenting' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CircleStackIcon onClick={() => setSelectedButton('Family Counseling')} width={70} height={70} className={"bg-white " + (selectedButton === 'Family Counseling' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CloudIcon onClick={() => setSelectedButton('Career Guidance')} width={70} height={70} className={"bg-white " + (selectedButton === 'Career Guidance' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />

                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NamesList;




