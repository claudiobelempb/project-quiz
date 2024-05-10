import AnswerModel from '@/models/ResponseModel';
import { ComponentProps } from 'react';

type AnswerProps = {
  response: AnswerModel;
  index: number;
  letter: string;
  bg: 'bg-yellow-500' | 'bg-pink-500' | 'bg-blue-500' | 'bg-green-500';
  onResponse: (index: number) => void;
} & ComponentProps<'div'>;

export const Answer: React.FC<AnswerProps> = ({
  response,
  index,
  letter,
  bg,
  onResponse,
  ...props
}) => {
  const revealed = response.revealed ? ' [transform:rotateY(180deg)]' : '';
  return (
    <div
      {...props}
      className={` delay-150 flex mb-3 min-w-96 h-24    perspective-1000 cursor-pointer`}
      onClick={() => onResponse(index)}
    >
      <div
        className={`flex flex-1 relative transition-transform duration-700 ${revealed} [transform-style:preserve-3d]`}
      >
        {!response.revealed ? (
          <div
            id='front'
            className={`flex items-center gap-2 w-full h-full px-3 bg-white text-black rounded-md absolute
            [backface-visibility:hidden]`}
          >
            <div
              className={`w-10 h-10 flex justify-center items-center font-bold text-2xl ${bg} rounded-full text-white `}
            >
              {letter}
            </div>
            <div className='text-2xl font-bold'>{response.value}</div>
          </div>
        ) : (
          <div
            id='verso'
            className={`flex items-center gap-2 w-full h-full mb-2 text-black [transform:rotateY(180deg)]
            [backface-visibility:hidden]
              `}
          >
            {response.correct ? (
              <div className='flex flex-col items-center justify-center w-full h-full bg-green-600 rounded-md'>
                <h2 className='text-white'>A responsta certa é...</h2>
                <p className='text-white text-2xl font-bold'>
                  {response.value}
                </p>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center w-full h-full bg-red-600 rounded-md'>
                <h2 className='text-white'>
                  A responsta informada está errada...
                </h2>
                <p className='text-white text-2xl font-bold'>
                  {response.value}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
