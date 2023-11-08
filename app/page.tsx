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

export default function Home() {
  return (
    <div>
        <title>Test Portfolio</title>
        <meta name="description" content="blah"></meta>

        <main className=' bg-purple-100 px-10'>

          <section className="min-h-screen">
            <nav className='p-10 mb-12 flex justify-between md:px-20 lg:px-40'>
              <h1 className='text-xl font-burtons text-black'>Juniper Dew</h1>
              <ul className='flex items-centre'>
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                </li>
                <li><a className="bg bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-lg ml-8" href='#'>Resume</a></li>
              </ul>
            </nav>

            <div className='text-center p-5'>
              <h2 className='font-medium text-cyan-600 text-5xl py-2 font-bold md:text-6xl lg:text-7xl'>Juniper Dew</h2>
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



          <section>
            <div>
              <h3 className='text-center text-black text-3xl font-semibold'>Services I Offer</h3>

              <p className='text-md mt-5 leading-8 text-center text-black'>
                 example text here lol example text here lol <a href="https://google.com" className="text-blue-500"> here's a cool link to google </a>
                 example text here lol example text here lol <span className='text-red-700'> and here is some text highlighted for no reason lmao </span>
              </p>
              <p className='text-md mt-5 leading-8 text-center text-black pb-5'>
                 and here's some more completely redundant text to fill up the <a href="https://www.boredbutton.com/random" className='text-pink-600'> pAgE. </a>
              </p>
            </div>

            <div className='flex justify-center gap-5'>

              <div className='p-5 shadow-lg'>
                <Image src={designimg} width={200} height={200}/>
                  <h3 className='text-black text-center text-2xl font-semibold'>Beautiful Designs</h3>
                  <h4 className='text-center text-cyan-600 font-bold pt-5 pb-2'>Software I Use:</h4>
                  <ul>
                    <li className='text-black text-center p-1 italic'>Audition</li>
                    <li className='text-black text-center p-1 italic'>Da Vinci Resolve</li>
                    <li className='text-black text-center p-1 italic'>Premiere Pro</li>
                  </ul>
              </div>

              <div className='p-5 shadow-lg'>
                <Image src={code} width={200} height={200}/>
                  <h3 className='text-black text-center text-2xl font-semibold'>Beautiful Designs</h3>
                  <h4 className='text-center text-cyan-600 font-bold pt-5 pb-2'>Software I Use:</h4>
                  <ul>
                    <li className='text-black text-center p-1 italic'>Audition</li>
                    <li className='text-black text-center p-1 italic'>Da Vinci Resolve</li>
                    <li className='text-black text-center p-1 italic'>Premiere Pro</li>
                  </ul>
              </div>

              <div className='p-5 shadow-lg'>
                <Image src={consulting} width={200} height={200}/>
                  <h3 className='text-black text-center text-2xl font-semibold'>Beautiful Designs</h3>
                  <h4 className='text-center text-cyan-600 font-bold pt-5 pb-2'>Software I Use:</h4>
                  <ul>
                    <li className='text-black text-center p-1 italic'>Audition</li>
                    <li className='text-black text-center p-1 italic'>Da Vinci Resolve</li>
                    <li className='text-black text-center p-1 italic'>Premiere Pro</li>
                  </ul>
              </div>

            </div>

          </section>

          <section className='py-10'>
            <div>
              <h3 className='text-center text-black text-3xl font-semibold pt-5'>Portfolio</h3>
              <p className='text-md mt-5 leading-8 text-center text-black'>
                 example text here lol example text here lol <a href="https://google.com" className="text-blue-500"> here's a cool link to google </a>
                 example text here lol example text here lol <span className='text-red-700'> and here is some text highlighted for no reason lmao </span>
              </p>
              <p className='text-md mt-5 leading-8 text-center text-black'>
                 and here's some more completely redundant text to fill up the <a href="https://www.boredbutton.com/random" className='text-pink-600'> pAgE. </a>
              </p>
            </div>
            <div>
              <div className='p-2'>
                <Image alt="Portfolio work" src={web1}/>
              </div>
              <div className='p-2'>
                <Image alt="Portfolio work" src={web2}/>
              </div>
              <div className='p-2'>
                <Image alt="Portfolio work" src={web3}/>
              </div>
              <div className='p-2'>
                <Image alt="Portfolio work" src={web4}/>
              </div>
              <div className='p-2'>
                <Image alt="Portfolio work" src={web5}/>
              </div>
              <div className='p-2'>
                <Image alt="Portfolio work" src={web6}/>
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