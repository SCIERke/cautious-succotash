import React from 'react'
import RouterBar from '../components/rounter'
import pcBanner from '../assets/pcBanner.gif'
import { useState } from 'react'

function Salary() {
  return (
    <div className='flex flex-col h-screen'>
        <RouterBar/>
        <div className='flex flex-row h-48 opacity-70 items-center justify-center' style={{ 
            backgroundImage: `url(${pcBanner})`,
            backgroundPosition: 'center'
        }}>
            <div className='font-newAms text-white text-6xl lg:text-9xl'>Salary and Pathway</div>
        </div>
        <div className='flex flex-col p-8 bg-white lg:flex-row lg:space-x-4 lg:space-y-0 space-y-7'>
            <div className='flex flex-col w-[100%] lg:w-[33%] h-auto'>
                <div className='bg-slate-300'>
                    <div className=" text-center font-newAms text-4xl">
                        Salary
                    </div>
                </div>
                <div className='bg-slate-200 p-3'>
                    <div className='font-oswald font-light mb-10 text-lg'>
                        The average monthly salary for IT Support Officer jobs in Thailand ranges from THB 22,000 to THB 32,000.
                    </div>
                    <div className='bg-slate-300 w-full h-8 flex justify-center rounded-md'>
                        <div className='bg-slate-400 h-full w-[30%] rounded-md'></div>
                    </div>
                    <div className='w-full flex flex-row font-oswald font-light'>
                        <div className="w-1/4 ">
                            THB 12K
                        </div>
                        <div className="w-1/4 text-center">
                            THB 22K
                        </div>
                        <div className="w-1/4 text-center">
                            THB 32K
                        </div>
                        <div className="w-1/4 text-right">
                            THB 42K
                        </div>
                    </div>
                    <div className='text-right w-full font-light font-oswald text-gray-400 text-sm mt-2'>
                        Refreshed on 1 Aug 2024
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[100%] lg:w-[33%] h-auto'>
                <div className='bg-slate-300'>
                    <div className="py-1 text-center font-newAms text-3xl">
                        Where do our salary insights come from?
                    </div>
                </div>
                <div className='bg-slate-200 p-4 font-oswald font-light text-lg'>
                    <li>
                        Our insights are based on full-time salary ranges disclosed by employers on Jobsdb job ads.
                    </li>
                    <li>
                        We only include salary data from jobs listed in the last year – this ensures you get an accurate representation of market trends.
                    </li>
                    <li>
                        Some disclosed salaries include superannuation and other salary benefits, while others don't. This varies between employers.
                    </li>
                </div>
            </div>
            <div className='flex flex-col w-[100%] lg:w-[33%] h-auto'>
                <div className='bg-slate-300'>
                    <div className=" text-center font-newAms text-4xl">
                        Pathway
                    </div>
                </div>
                <div className='bg-slate-200 p-3 flex flex-col justify-center items-center'>
                    <div className='font-oswald font-light mb-4  text-lg'>
                        IT Support Technician must have a various knowledge of IT ,So IT Support Technician Support can grow many ways Such as Software Engineer ,CyberSecurity Engineer ,Web Developer and much more.  
                    </div>
                    <div className='flex justify-center bg-slate-300 w-[45%] lg:w-[60%] rounded-md h-10 items-center my-5'>
                        <a href='https://roadmap.sh/' className='font-oswald text-xl'>
                            You can click me to see more detail
                        </a>
                    </div>  
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Salary
