import React from 'react';

type ProgressBarProps = {
  className: string;
  percentage: number;
  textStart: string;
};

export default function ProgressBar({
  className,
  percentage,
  textStart,
}: ProgressBarProps) {
  return (
    <div className="flex flex-row gap-2 items-center font-medium w-full">
      <p className='w-[10%]' >{textStart}</p>
      <div className="bg-gray-200 rounded-sm w-4/5 h-2">
        <div className={`h-2 rounded-sm ${className}`} style={{ width: `${percentage}%` }}></div>
      </div>
      <p className='w-[10%]'>{percentage}%</p>
    </div>
  );
}
