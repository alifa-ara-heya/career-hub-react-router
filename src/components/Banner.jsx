import officeImg from '../assets/images/officeImage.svg'
const Banner = () => {
    return (

        <div className="bg-gray-100 py-12">
            <div className='max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-20 md:w-[1220px] w-auto'>

                {/* text content */}
                <div className='space-y-10 px-4 md:px-0 md:w-1/2 w-3/4'>
                    <h2 className='font-extrabold text-3xl md:w-[90%] md:text-7xl leading-relaxed'>One Step Closer To Your <br /> <span className='bg-gradient-to-r from-indigo-300 to-purple-500  bg-clip-text text-transparent'>Dream Job</span></h2>
                    <p className='text-xl font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='custom-btn'>Get Started</button>
                </div>
                {/* image */}
                <div className=''>
                    <img src={officeImg} alt="" className='h-[500px]' />
                </div>
            </div>
        </div>

    );
};

export default Banner;