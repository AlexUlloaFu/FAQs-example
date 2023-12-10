import React, { useState } from 'react';
import plusIcon from '../images/icon-plus.svg'
import minusIcon from '../images/icon-minus.svg'

const ExpandableComponent = ({headerText,mainText}) => {
 const [isExpanded, setIsExpanded] = useState(false);

 const handleClick = () => {
   setIsExpanded(!isExpanded);
 };

 return (
   <div className='py-5 px-2 hover:rounded-lg hover:bg-Pink'>

   <div className="cursor-pointer flex justify-between items-center " onClick={handleClick}>
        <p className=' font-WorkSans text-DarkPurple font-bold sm:text-lg lg:text-sm text-left'>{headerText}</p>
        <img className='lg:w-6' src={isExpanded ? minusIcon : plusIcon }  alt='icon'/>
   </div>

   {isExpanded && (
       <div className=" mt-5 bg-white">
         <p className=' lg:text-xs text-base text-left font-WorkSans light text-Purple '>{mainText}</p>
       </div>
     )}

   </div>
   
 );
};

export default ExpandableComponent;