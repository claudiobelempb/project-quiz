import QuestionModel from '@/models/QuestionModel';
import { ComponentProps } from 'react';
import { Timer } from '../Timer';
import { Answer } from '../answer/Answer';
import { Statement } from './Statement';

type QuestionProps = {
  question: QuestionModel;
  responseTime?: number;
  onResponse: (index: number) => void;
  timerIsOver: () => void;
  onNextStep: () => void;
} & ComponentProps<'div'>;

type LetterProps = {
  letter: string;
  color: 'bg-yellow-500' | 'bg-pink-500' | 'bg-blue-500' | 'bg-green-500';
};
const letters: LetterProps[] = [
  { letter: 'A', color: 'bg-yellow-500' },
  { letter: 'B', color: 'bg-pink-500' },
  { letter: 'C', color: 'bg-blue-500' },
  { letter: 'D', color: 'bg-green-500' }
];

export const Question: React.FC<QuestionProps> = ({
  onResponse,
  onNextStep,
  timerIsOver,
  question,
  responseTime,
  ...props
}) => {
  function renderResponse() {
    return question.answers?.map((response, index) => (
      <Answer
        key={`${question.id}-${index}`}
        onResponse={onResponse}
        response={response}
        index={index}
        bg={letters[index].color}
        className={`bg-green-500`}
        letter={letters[index].letter}
      />
    ));
  }

  return (
    <div {...props} className='flex flex-col items-center justify-center'>
      <Statement statement={question.statement} />
      <Timer
        key={question.id}
        responseTime={responseTime ?? 10}
        timerIsOver={timerIsOver}
      />
      {renderResponse()}
    </div>
  );
};
