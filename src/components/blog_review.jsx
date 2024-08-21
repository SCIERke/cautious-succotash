function BlogPage() {
    return (
        <div className='flex-grow bg-white flex-col p-4'>
            <div className='font-newAms text-2xl text-slate-700 lg:text-4xl'>
                Review your Career
            </div>
            <div className='flex flex-row items-center mt-2 h-10'>
                <div className='w-60 h-full lg:w-80'>
                    <input 
                        name="Search" 
                        type="text" 
                        placeholder='Search Blog' 
                        className='bg-slate-200 px-2 rounded-l-md font-light lg:px-4 lg:py-2 font-oswald w-full h-full '
                    />
                </div>
                <div className="flex bg-slate-300 h-full font-newAms items-center w-12 justify-center rounded-r-md lg:w-20 hover:cursor-pointer">
                    <div>Submit</div>
                </div>
            </div>
            
            <div className=''>
                { }
            </div>
        </div>
    )
}

export default BlogPage;