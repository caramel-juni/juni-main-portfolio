// @ts-nocheck // Add this to suppress TypeScript errors
// @ts-ignore
"use client"
import Head from 'next/head';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';
import deved from "../public/dev-ed-wave.png";
import designimg from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { useState } from "react";

export default function Home() {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
        <title>Test Portfolio</title>
        <meta name="description" content="blah"></meta>

        <main className=' bg-purple-100 px-10 dark:bg-purple-950'>

          <section className="min-h-screen">
            <nav className='p-10 mb-12 flex justify-between md:px-20 lg:px-40'>
              <h1 className='text-xl font-burtons text-black dark:text-white'>Juniper Dew</h1>
              <ul className='flex items-centre'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode) }className="cursor-pointer text-2xl"/>
                </li>
                <li><a className="bg bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-lg ml-8" href='#'>Resume</a></li>
              </ul>
            </nav>

            <div className='text-center p-5'>
              <h2 className='text-cyan-600 text-5xl py-2 font-bold md:text-6xl lg:text-7xl'>Juniper Dew</h2>
              <h3 className='text-2xl py-2 text-black md:text-2xl lg:text-3xl dark:text-white'>Filmaker and Tech Wannabe</h3>
              <p className='text-md leading-10 text-black md:text-xl max-w-xl mx-auto dark:text-white'>
              A wandering filmmaker, attempting to
              come to grips with the subtleties and
              nature of both the human mind and the
              ever-changing physical world we reside in.
              </p>


            </div>

            <div className='flex px-5 gap-16 text-5xl justify-center text-gray-500 pb-5'>
              <a href="https://linkedin.com/in/juniper-dew-766214235">
                <AiFillLinkedin/>   
              </a>
              <a href="https://twitter.com/juni_dew">
                <AiFillTwitterCircle/>
              </a>
              <a href="https://www.youtube.com/@juni.mp4">
                <AiFillYoutube/>
              </a>
              <a href="https://www.instagram.com/mtn.dew.is.good.4u/">
                <AiFillInstagram/>
              </a>
            </div>
                      {/* use mx-auto to auto-margin x & centre the div */}
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96'>
              <Image alt="" src={deved} layout='fill' objectFit='cover'/>
            </div>


          </section>



          <section className='pt-24'>
            <div>
              <h3 className='text-center text-black text-3xl font-semibold dark:text-white'>Services I Offer</h3>

              <p className='text-md mt-5 leading-8 text-center text-black md:text-xl max-w-xl mx-auto dark:text-white'>
                 example text here lol example text here lol <a href="https://google.com" className="text-blue-500"> here's a cool link to google </a>
                 example text here lol example text here lol <span className='text-red-700'> and here is some text highlighted for no reason lmao </span>
              </p>
              <p className='text-md mt-5 leading-8 text-center text-black pb-5 dark:text-white'>
                 and here's some more completely redundant text to fill up the <a href="https://www.boredbutton.com/random" className='text-pink-600'> pAgE. </a>
              </p>
            </div>

            <div className='lg:flex lg:justify-center gap-5'>

              <div className='p-5 shadow-lg text-center'>
                <div className='flex justify-center'><Image src={designimg} width={200} height={200}/></div>
                  <h3 className='text-black text-2xl font-semibold dark:text-white'>Beautiful Designs</h3>
                  <h4 className=' text-cyan-600 font-bold pt-5 pb-2'>Software I Use:</h4>
                  <ul>
                    <li className='text-black text-center p-1 italic dark:text-white'>Audition</li>
                    <li className='text-black text-center p-1 italic dark:text-white'>Da Vinci Resolve</li>
                    <li className='text-black text-center p-1 italic dark:text-white'>Premiere Pro</li>
                  </ul>
              </div>

              <div className='p-5 shadow-lg'>
                <div className='flex justify-center'><Image src={code} width={200} height={200}/></div>
                    <h3 className='text-black text-center text-2xl font-semibold dark:text-white'>Beautiful Designs</h3>
                    <h4 className='text-center text-cyan-600 font-bold pt-5 pb-2'>Software I Use:</h4>
                    <ul>
                      <li className='text-black text-center p-1 italic dark:text-white'>Audition</li>
                      <li className='text-black text-center p-1 italic dark:text-white'>Da Vinci Resolve</li>
                      <li className='text-black text-center p-1 italic dark:text-white'>Premiere Pro</li>
                    </ul>
              </div>

              <div className='p-5 shadow-lg'>
                <div className='flex justify-center'><Image src={consulting} width={200} height={200}/></div>
                    <h3 className='text-black text-center text-2xl font-semibold dark:text-white'>Beautiful Designs</h3>
                    <h4 className='text-center text-cyan-600 font-bold pt-5 pb-2'>Software I Use:</h4>
                    <ul>
                      <li className='text-black text-center p-1 italic dark:text-white'>Audition</li>
                      <li className='text-black text-center p-1 italic dark:text-white'>Da Vinci Resolve</li>
                      <li className='text-black text-center p-1 italic dark:text-white'>Premiere Pro</li>
                    </ul>
              </div>

            </div>

          </section>

          <section className='pb-5 pt-24'>
            <div>
              <h3 className='text-center text-black text-3xl font-semibold pt-5 dark:text-white'>Portfolio</h3>
              <p className='text-md mt-5 leading-8 text-center text-black dark:text-white'>
                 example text here lol example text here lol <a href="https://google.com" className="text-blue-500"> here's a cool link to google </a>
                 example text here lol example text here lol <span className='text-red-700'> and here is some text highlighted for no reason lmao </span>
              </p>
              <p className='text-md mt-5 leading-8 text-center text-black dark:text-white'>
                 and here's some more completely redundant text to fill up the <a href="https://www.boredbutton.com/random" className='text-pink-600'> pAgE. </a>
              </p>
            </div>
            <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap'> 
              <div className='basis-1/3 flex-1'>
                <Image alt="Portfolio work" src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"}/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image alt="Portfolio work" src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"}/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image alt="Portfolio work" src={web3} className='rounded-lg object-cover' width={"100%"} height={"100%"}/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image alt="Portfolio work" src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"}/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image alt="Portfolio work" src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"}/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image alt="Portfolio work" src={web6} className='rounded-lg object-cover' width={"100%"} height={"100%"}/>
              </div>
            </div>
          </section>








        </main>
    </div>
  );
}


// to highlight sections of text, wrap with <span className="text-white"> TEXT HERE </span> tag 
// to add links, use: <a href="https://google.com" className="text-blue-500">Text On Page Here</a>

// to add images, import them at the start of the page using: import X from "../public/X.png"
// then use <Image src={X} width={} height={}/> etc., using {} as is modifying an imported element.

// to target certain stylings to kick in at certain screen sizes for an element, append style with a 'sm', 'md', 'lg' tag 
// e.g. -     md:px-20 lg:px-40