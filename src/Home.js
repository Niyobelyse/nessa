import React from 'react'
import { FaArrowRight, FaTag } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>
    
      <Navbar/>
      <div className='bgimage mt-0'>
        <div className='p-24'>
        <h1 className='text-white text-6xl ml-8 mt-32 font-bold'>NESSA</h1>
        <h3 className='text-white mt-8 ml-8 font-medium text-3xl'>National Examination and School Inspection Authority</h3>
        </div>
        
      </div>
     <div id='section_call_to_action'>
<div className='grid sm:grid-cols-3 space-x-4 h-72 -translate-y-24'>
       
<div class=" ml-8 w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-gray-400'/>
    
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Basic Education and TVET Quality Assurance Department</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">• Manage and coordinate all examination, selection, assessment and certification related activities • Initiate policies, principles,…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
    Read more
    <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div class="ml-8 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-gray-400'/>
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Basic Education and TVET Quality Assurance Department</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">• Manage and coordinate all examination, selection, assessment and certification related activities • Initiate policies, principles,…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div class="ml-8 w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<FaTag className='w-8 h-10 mb-2 text-blue-600 dark:text-gray-400'/>
    <Link to="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Basic Education and TVET Quality Assurance Department</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">• Manage and coordinate all examination, selection, assessment and certification related activities • Initiate policies, principles,…</p>
    <Link to="#" class="inline-flex items-center text-black-600 hover:underline">
    Read more
    <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
</div>
<div></div>
<div className=''>
    <button className='h-8 w-44 bg-blue-600 ml-32 mt-8'>
        Explore More
    </button>
</div>
</div>

</div> 


<div>
<div className='font-bold text-4xl ml-24 mt-14'>Latest News</div>
<div className='grid grid-cols-3 gaps-3 px-16 mt-40'>
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <img class="rounded-t-lg w-full" src="./WEB_3.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div class="max-w-sm ml-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <img class="rounded-t-lg h-60 w-full" src="./WEB_4.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div class="max-w-sm ml-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <img className="h-60  rounded-t-lg  w-full" src="./WEB_5.jpg" alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="#" class="inline-flex font-bold items-center text-black-600 hover:underline">
        Read more
        <FaArrowRight className=' w-10 mb-2 text-black-600 dark:text-black-400'/>
    </Link>
    </div>
</div>

<div></div>
<div className=''>
    <button className='text-white h-8 w-44 bg-blue-600 ml-32 mt-8'>
        Explore More
    </button>
</div>
<div></div>

</div>




</div>
</div>
<div>
</div>    

    </>
  )
}

export default Home