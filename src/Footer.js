import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    
<div className="footer bg-steel-700 dark:bg-steel-700">
    <div class="mt-8 inline-flex">

        <div>
            <h2 class="mt-16 ml-24 text-sm font-semibold text-white uppercase dark:text-white">Useful Links</h2>
            <ul class="text-white mt-8 ml-24 dark:text-white">
                <li class="mb-4">
                    <Link to="#" class="hover:underline">Discord Server</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">Twitter</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">Facebook</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">Contact Us</Link>
                </li>
            </ul>
        </div>
        <div className=''>
            <h2 class="mt-16 ml-52 text-sm font-semibold text-white uppercase dark:text-gray-400">Contact Us</h2>
            <ul class=" mt-8 ml-52  text-white dark:text-white">
                <li class="mb-4">
                    <Link to="#" class="hover:underline">Privacy Policy</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">Licensing</Link>
                </li>
                <li class="mb-4">
                    <Link to="#" class="hover:underline">Terms &amp; Conditions</Link>
                </li>
            </ul>
        </div>
        <div className='ml-56'>
           
            <ul >
                <li class="mb-8">
               
                <iframe src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.872944828452!2d30.10117235!3d-1.9666365000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2srw!4v1678806913488!5m2!1sen!2srw " className='' width='500' height='450'style={{ border:0, }} allowfullscreen="" title="This is a unique title" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               
                </li>
                
            </ul>
           
        </div>
    </div>    

</div>

  )
}

export default Footer