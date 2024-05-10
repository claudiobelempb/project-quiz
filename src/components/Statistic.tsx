import React, { ComponentProps } from 'react';

type StatisticProps = {
  value: string;
  descriptin: string;
  color:
    | 'text-green-700'
    | 'text-white-700'
    | 'text-yellow-700'
    | 'text-blue-700'
    | 'text-red-700'
    | 'text-gray-700';
  bg:
    | 'bg-green-400'
    | 'bg-yellow-500'
    | 'bg-blue-500'
    | 'bg-red-400'
    | 'bg-gray-500';
} & ComponentProps<'div'>;

export const Statistic: React.FC<StatisticProps> = ({
  value,
  descriptin,
  color,
  bg,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`
      flex 
      flex-col
      py-4
      items-center 
      ${props.className}
    `}
    >
      <div
        className={`
        w-44
        h-44
        flex
        justify-center
        items-center
        rounded-full
        text-6xl
        hover:-translate-y-1 
        hover:scale-105
        duration-300
        ${color ?? 'text-gray-700'}
        ${bg ?? 'bg-yellow-500'}

      ${props.className}
    `}
      >
        {value}
      </div>
      <div
        className={`
      text-lg
      font-light
      
      ${props.className}
    `}
      >
        {descriptin}
      </div>
    </div>
  );
};
