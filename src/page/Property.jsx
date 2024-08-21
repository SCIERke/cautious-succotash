import React from 'react';
import RouterBar from '../components/rounter';

function Property() {
  return (
    <div className='flex flex-col h-screen'>
      <RouterBar />
      <div className='flex flex-col flex-grow overflow-hidden p-10'>
        <div className='font-newAms text-4xl mb-4'>
          IT Support Job Description: Top Duties and Qualifications
        </div>
        <div className='flex flex-row gap-4'>
          <div className='relative' style={{ width: '30%' /* Adjust width as needed */ }}>
            <div className='relative pb-[70%] h-0 overflow-hidden'>
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src='https://www.youtube.com/embed/pWAthrmSGyk'
                frameBorder='0'
                allowFullScreen
                title='IT Support Job Overview'
              ></iframe>
            </div>
          </div>
          <div className='flex flex-col w-[100%] lg:w-[33%] h-auto'>
            <div className='bg-slate-300'>
              <div className=" text-center font-newAms text-2xl">
                Key Properties of IT Support Technician
              </div>
            </div>
            <div className='bg-slate-200 p-3 flex flex-col justify-center items-center'>
              <div className='font-oswald font-light mb-4 text-lg space-y-2'>
                <div>
                  <span className='font-bold'>Technical Skills:  </span>
                  <div>
                    Proficiency in troubleshooting hardware and software issues.
                    Knowledge of operating systems (e.g., Windows, macOS, Linux).
                    Familiarity with networking concepts and protocols (e.g., TCP/IP, DNS, DHCP).
                    Ability to work with various types of hardware (e.g., desktops, laptops, printers).
                  </div>
                </div>
                <div>
                  <span className='font-bold'>Customer Service Skills:</span>
                  <div>
                    Strong communication skills to assist users effectively.
                    Patience and problem-solving ability to address user concerns.
                    Ability to explain technical issues in a non-technical manner.
                  </div>
                </div>
                <div>
                  <span className='font-bold'>Organizational Skills:</span>
                  <div>
                    Ability to prioritize and manage multiple tasks.
                    Documentation skills for tracking issues and solutions.
                  </div>
                </div>
                <div>
                  <span className='font-bold'>Analytical Skills:</span>
                  <div>
                    Capability to diagnose and resolve technical problems.
                    Analytical thinking to identify root causes of issues.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* This is the new section that you want to display alongside the other content */}
          <div className='flex flex-col w-[100%] lg:w-[33%] h-auto'>
            <div className='bg-slate-300'>
              <div className=" text-center font-newAms text-2xl">
                Typical Duties and Responsibilities
              </div>
            </div>
            <div className='bg-slate-200 p-3 flex flex-col justify-center items-center'>
              <div className='font-oswald font-light mb-4 text-lg space-y-4'>
                <div>
                  <span className='font-bold'>Technical Support:</span>
                  <div>
                    Proficiency in troubleshooting hardware and software issues.
                    Knowledge of operating systems (e.g., Windows, macOS, Linux).
                    Familiarity with networking concepts and protocols (e.g., TCP/IP, DNS, DHCP).
                    Ability to work with various types of hardware (e.g., desktops, laptops, printers).
                  </div>
                </div>
                <div>
                  <span className='font-bold'>Maintenance and Upgrades</span>
                  <div>
                    Perform regular maintenance on IT systems.
                    Update software and apply patches to keep systems secure.
                  </div>
                </div>
                <div>
                  <span className='font-bold'>Installation and Configuration:</span>
                  <div>
                    Set up and configure new hardware and software.
                    Install operating systems and applications.
                  </div>
                </div>
                <div>
                  <span className='font-bold'>User Assistance:</span>
                  <div>
                    Assist users with login issues, software usage, and general IT queries.
                    Provide training and support to end-users.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
