import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
        <title>Test Portfolio</title>
        <meta name="description" content="blah"></meta>

        <main className=' bg-purple-500 px-10'>

          <section className="min-h-screen">
            <nav className='p-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons'>juniper dew</h1>
              <ul className='flex items-centre'>
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                </li>
                <li><a className="bg bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-lg ml-8" href='#'>Resume</a></li>
              </ul>
            </nav>

            <div className='text-center p-10'>
              <h2 className='font-medium text-teal-500 text-5xl py-2 font-bold'>Juniper Dew</h2>
              <h3 className='text-2xl py-2'>Filmaker and Tech Wannabe</h3>
              <p className='text-md leading-10 text-gray-200'>
                shgdjhfgsdjgfsdfjhgsjhfgsdjgjs
                hggsdjsbcjbcjhbcjhbs
                djhbcjhsdbcjb
                sjcbsjdbc
                sjdbc
                jsd
                bc
              </p>


            </div>

            <div className='flex px-5 gap-16 text-5xl justify-center text-gray-100'>
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


          </section>
        </main>
    </div>
  );
}
