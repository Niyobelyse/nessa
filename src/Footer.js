import React from 'react'

const Footer = () => {
  return (
    
<div class="bg-blue-900 dark:bg-gray-900">
    <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">

        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Useful Links</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Contact Us</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
           
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
               
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63798.292939464736!2d30.10846053055039!3d-1.9977446771455631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca78ff629565d%3A0xb788cfab01b41272!2sKanombe%2C%20Kigali!5e0!3m2!1sen!2srw!4v1671614017496!5m2!1sen!2srw" width="500" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
               
                </li>
                
            </ul>
        </div>
    </div>    

</div>

  )
}

export default Footer