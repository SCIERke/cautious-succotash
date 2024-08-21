import { Link } from 'react-router-dom';
import './../App.css';

function RouterBar() {
    return (
        <div className='flex flex-row items-center h-16 w-full bg-slate-200 lg:h-20 px-3 lg:px-10 justify-between'>
          <div className='font-newAms text-3xl lg:text-4xl text-slate-800'>
            IT Support Technician
          </div>
          <div className='flex flex-row font-newAms text-slate-500 text-lg lg:text-2xl'>
            <Link to="/" className='hover:text-slate-900 cursor-pointer mx-2 lg:mx-4'>
              Home
            </Link>
            <Link to="/property" className='hover:text-slate-900 cursor-pointer mx-2 lg:mx-4'>
              Property
            </Link>
            <Link to="/salary" className='hover:text-slate-900 cursor-pointer mx-2 lg:mx-4'>
              Salary | Path Way
            </Link>
          </div>
        </div>
    )
}

export default RouterBar;