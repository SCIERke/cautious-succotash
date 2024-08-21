import RouterBar from '../components/rounter';
import { useState } from 'react';
import BlogPage from '../components/blog_review';
import Description from '../components/desciption';

function Home() {
    return (
        <div className='flex flex-col h-screen'>
            <RouterBar/>
            <div className='flex flex-row flex-grow overflow-hidden'>
                <div className='w-32 bg-slate-400 lg:w-56'></div>
                <div className='flex flex-col'>
                    <Description/>
                </div>
                
            </div>
        </div>
    );
}

export default Home;