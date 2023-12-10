import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import starIcon from './images/icon-star.svg'
import bgMobile from './images/background-pattern-mobile.svg'
import bgDesktop from './images/background-pattern-desktop.svg'
import ExpandableComponent from './components/ExpandableComponent';

import { getAllFAQs } from './services/FAQService';
import faqs from './faqs.json'

function App() {

  const [FAQs , setFAQs] = useState([])
  const [bgImage, setBgImage] = useState(window.innerWidth > 375 ? bgDesktop : bgMobile);

  useEffect(() => {
   const handleResize = () => {
     setBgImage(window.innerWidth > 375 ? bgDesktop : bgMobile);
   };
   window.addEventListener('resize', handleResize);
   // Clean up function
   return () => {
     window.removeEventListener('resize', handleResize);
   };
  }, []);

  useEffect( () => {
    /*
    getAllFAQs().then((data) => {
      setFAQs(data.faqs)
      }
    )
    */
   setFAQs(faqs.faqs)
  }, [])

  return (
    <div>
      <img className='absolute -z-20' src={bgImage} alt='background'/>
      <div className=" p-2">
        <div className=" mt-[10vh] sm:mt-[20vh] p-3 px-5 bg-White rounded-lg shadow min-h-[50vh] sm:w-11/12 lg:w-2/5 mx-auto">
          <div className="flex ">
            <img src={starIcon} className=" w-5" alt='icon'/>
            <h1 className=" font-WorkSans text-DarkPurple font-bold text-3xl px-4">FAQs</h1>
          </div>
          <div className='mt-5'>
            {
              FAQs.map( (faq,index) => 
                <ExpandableComponent key={index} headerText={faq.headerText} mainText={faq.mainText}/>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
