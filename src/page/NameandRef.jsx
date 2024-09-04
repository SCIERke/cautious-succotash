import React from 'react'
import RouterBar from '../components/rounter';



function NameAndRef() {
  return (
    <div className='flex flex-col h-screen'>
      <RouterBar />
      <div className='flex flex-row h-auto w-screen p-4 space-x-5'>
        <div className='flex flex-col w-[100%] lg:w-[50%] h-auto'>
          <div className='bg-slate-300'>
            <div className=" text-center font-newAms text-5xl">
                Our Team
            </div>
            <div className='bg-slate-200 p-3'>
              <div className='space-y-2 font-kanit text-xl font-light'>
                <li>นายพิชญะ พราหมณะนันทน์ เลขที่ 4</li>
                <li>นายพีรพัฒน์ เศษสุข เลขที่ 7</li>
                <li>นายศิวัช อาภาสกุล เลขที่ 10</li>
                <li>นายภัคณัฐพงศ์ จีรานุโกศล เลขที่ 12</li>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[100%] lg:w-[50%] h-auto'>
          <div className='bg-slate-300'>
            <div className=" text-center font-newAms text-5xl">
                Reference
            </div>
            <div className='bg-slate-200 p-3 '>
              <div className='flex flex-col space-y-2 font-kanit justify-center text-xl font-light items-center'>
                <div className='flex justify-center bg-slate-300 w-[50%] p-4 rounded-md h-10 items-center my-5'>
                  <a href='https://www.arit.co.th/topic/it-support' className='font-oswald text-xl'>
                    https://www.arit.co.th/topic/it-support
                  </a>
                </div>
                <div className='flex justify-center bg-slate-300 w-[50%] p-4 rounded-md h-10 items-center my-5'>
                  <a href='https://th.jobsdb.com/th/it-support-jobs' className='font-oswald text-xl'>
                  https://th.jobsdb.com/th/it-support-jobs
                  </a>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NameAndRef;
