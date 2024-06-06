import React from 'react';


type CustomButtonProps = {
    buttonText: string;
}

export default function CustomButton ({buttonText}: CustomButtonProps){
    return (
        <div className="w-fit h-fit flex font-semibold flow-row gap-2 text-black text-center lg:text-lg md:text-sm text-xs items-center lg:py-3 lg:px-4 px-2 py-1 bg-gray-100 rounded-lg">
            {buttonText}  
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg> 
    </div>
    );
};
