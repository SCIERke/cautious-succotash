import './../App.css'
import { useEffect ,useRef ,useState } from 'react';

import it_description from './../assets/it_description.jpg'
import { Link } from 'react-router-dom';

function Description() {
    const hasTyped = useRef(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (!hasTyped.current) {
            let i = 0;
            const txt = 'Inntroduce to IT Support Technician';
            const speed = 50;

            function typeWriter() {
                if (i < txt.length) {
                    setText(prev => prev + txt.charAt(i));
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            typeWriter();
            hasTyped.current = true;
        }
    }, []);


    return ( 
        <div className="flex flex-col p-20 pb-0 items-center lg:items-start">
            <div className='typewriter'>
                <div className="font-newAms text-4xl lg:text-6xl" id="IT_Intro">{text}</div>
            </div>
            <div className="flex flex-row lg:mt-3 ">
                <div className="flex flex-col w-[75%] ">
                    <div >
                        <div className="text-gray-700 leading-relaxed  font-oswald font-light lg:font-extralight mt-4 lg:ml-3 lg:text-xl">
                            IT Support Technicians are responsible for diagnosing, troubleshooting, and resolving issues related to computer hardware, software, and networks. They play a critical role in maintaining the IT infrastructure of organizations, ensuring that all systems run smoothly and efficiently. Key responsibilities include:
                        </div>
                        <ul className="list-disc ml-5 mt-2 hidden lg:ml-16 lg:block lg:font-oswald lg:font-extralight lg:text-lg">
                            <li>Providing technical support and assistance to users.</li>
                            <li>Installing and configuring computer systems and applications.</li>
                            <li>Monitoring and maintaining computer networks.</li>
                        </ul>
                    </div>
                    <div className='flex justify-center mt-10 hover:cursor-pointer'>
                        <div className='flex w-56 h-16 bg-slate-300 items-center justify-center rounded-md'>
                            <Link className='font-newAms text-2xl' to="/property">See more detail!</Link>
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:flex-col w-2/5 mt-2 lg:mt-4 lg:justify-center lg:items-center hidden'>
                    <img src={it_description} alt="IT_Support_Description "/>
                    <div className='font-oswald text-xl mt-2 lg:mt-3'>IT Support Technician Look&Feels</div>
                </div>
            </div>
        </div>        
    )
}

export default Description;