import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import deved from "../public/dev-ed-wave.png"

export default function Home() {
  return (
    <div>
        <title>Test Portfolio</title>
        <meta name="description" content="blah"></meta>

        <main className=' bg-purple-100 px-10'>

          <section className="min-h-screen">
            <nav className='p-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons text-black'>Juniper Dew</h1>
              <ul className='flex items-centre'>
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                </li>
                <li><a className="bg bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-lg ml-8" href='#'>Resume</a></li>
              </ul>
            </nav>

            <div className='text-center p-10'>
              <h2 className='font-medium text-cyan-600 text-5xl py-2 font-bold'>Juniper Dew</h2>
              <h3 className='text-2xl py-2 text-black'>Filmaker and Tech Wannabe</h3>
              <p className='text-md leading-10 text-black'>
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
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 overflow-hidden'>
              <Image alt="" src={deved} layout='fill' objectFit='cover'/>
            </div>


          </section>
        </main>
    </div>
  );
}
