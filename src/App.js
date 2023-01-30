import './App.css';
import { FaMoon, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

//importing avatar placeholder
import deved from './images/dev-ed-wave.png'
import design from './images/design.png'
import code from './images/code.png'
import consulting from './images/consulting.png'
import web1 from './images/web1.png'
import web2 from './images/web2.png'
import web3 from './images/web3.png'
import web4 from './images/web4.png'
import web5 from './images/web5.png'
import web6 from './images/web6.png'
import { useState } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark':''}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl dark:text-white'>Hamza Ali</h1>
          <ul className='flex items-center'>
            <li><FaMoon className="dark:text-white" onClick={()=>setDarkMode(!darkMode)}/></li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 ml-8 rounded-lg' href="#res">Resume</a></li>
          </ul>
        </nav>
    <div className='lg:flex lg:flex-row lg:items-stretch xl:flex xl:justify-center xl:text-center'>
      <div className='text-center p-10 '>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Hamza Ali</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Learner</h3>
        <p className='text-md py-5 leading-8 md:text-xl max-w-lg mx-auto dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et molestie eros, eu luctus tellus. Nullam libero magna</p>
        <div className='flex justify-center gap-16 py-3 text-gray-600 text-5xl'>
        <FaFacebook />
        <FaYoutube />
        <FaLinkedin />
      </div>
      </div>
      
      <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20 overflow-hidden md:w-96 md:h-96 lg:m-10'>
      <img src={deved} alt="avatar pho" style={{width:'100%', height:'100%',display:'block', objectFit:'cover'}}/>
      </div>
      </div>
      </section>
      <section>
        <div>
           <h1 className='py-2 text-3xl dark:text-white'>Services i offer </h1>
           <p className='text-md py-2 leading-8 text-gray-600 dark:text-white' >Lorem ipsum dolor sit amet, <span className='text-teal-500'>consectetur</span> adipiscing elit. Maecenas et molestie eros, eu <span className='text-teal-500'>luctus</span> tellus. Nullam libero magna</p>
           <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>I offer ipsum dolor sit amet, <span className='text-teal-500'>consectetur</span>  elit. Maecenas et molestie eros, eu <span className='text-teal-500'>luctus</span> tellus. Nullam libero magna</p>

        </div>
        <div className='lg:flex gap-10 '>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
             <img src={design} alt="service 1" className='mx-auto w-28 h-28'/>
             <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
             <p className='py-2 '>I offer ipsum dolor sit amet, consectetur elit. Maecenas et molestie eros, eu luctus tellus. Nullam libero magna</p>
            <h4 className='py-4 text-teal-600'>Design tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
             <img src={code} alt="service 1" className='mx-auto w-28 h-28'/>
             <h3 className='text-lg font-medium pt-8 pb-2'>Coding</h3>
             <p className='py-2 '>I offer ipsum dolor sit amet, consectetur elit. Maecenas et molestie eros, eu luctus tellus. Nullam libero magna</p>
            <h4 className='py-4 text-teal-600'>Design tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
             <img src={consulting} alt="service 1" className='mx-auto w-28 h-28'/>
             <h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
             <p className='py-2 '>I offer ipsum dolor sit amet, consectetur elit. Maecenas et molestie eros, eu luctus tellus. Nullam libero magna</p>
            <h4 className='py-4 text-teal-600'>Design tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className='py-2 text-3xl dark:text-white'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>Lorem ipsum dolor sit amet, <span className='text-teal-500'>consectetur</span> adipiscing elit. Maecenas et molestie eros, eu <span className='text-teal-500'>luctus</span> tellus. Nullam libero magna</p>
           <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>I offer ipsum dolor sit amet, <span className='text-teal-500'>consectetur</span>  elit. Maecenas et molestie eros, eu <span className='text-teal-500'>luctus</span> tellus. Nullam libero magna</p>

        </div>

        <div className='flex flex-col items-center gap-10 py-10 lg:flex-row lg:flex-wrap '>
          <div className='basic-1/3 flex-1'><img src={web1} alt={web1} className="rounded-lg object-cover max-w-xs"/></div>
          <div className='basic-1/3 flex-1'><img src={web2} alt={web2} className="rounded-lg object-cover max-w-xs"/></div>
          <div className='basic-1/3 flex-1'><img src={web3} alt={web3} className="rounded-lg object-cover max-w-xs"/></div>
          <div className='basic-1/3 flex-1'><img src={web4} alt={web4} className="rounded-lg object-cover max-w-xs"/></div>
          <div className='basic-1/3 flex-1'><img src={web5} alt={web5} className="rounded-lg object-cover max-w-xs"/></div>
          <div className='basic-1/3 flex-1'><img src={web6} alt={web6} className="rounded-lg object-cover max-w-xs"/></div>

        </div>
      </section>
      <footer className='py-10 text-center border-t-2 dark:text-white'>
        <p>Copyright &copy; {(new Date().getFullYear())} Made with <span className=' text-red-600'>&hearts;</span> by Hamza</p>
      </footer>
    </main>
    </div>
  );
}

export default App;
