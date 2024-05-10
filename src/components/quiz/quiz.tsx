import QuestionModel from '@/models/QuestionModel';
import { ComponentProps } from 'react';
import { ButtonGroup, ButtonRoot, ButtonText } from '../ButtonRoot';
import { Question } from '../question/Question';

type QuizProps = {
  question: QuestionModel;
  isLast: boolean;
  onReponseQuestion: (question: QuestionModel) => void;
  onNextStep: () => void;
} & ComponentProps<'div'>;

export const Quiz: React.FC<QuizProps> = ({
  question,
  onReponseQuestion,
  onNextStep,
  isLast,
  ...props
}) => {
  function handleResponse(index: number) {
    if (question.notRespond) {
      onReponseQuestion(question.respondHow(index));
    }
  }

  return (
    <div
      {...props}
      className={`flex justify-center items-center flex-col max-w-96 min-w-full ${props.className}`}
    >
      {question ? (
        <>
          <Question
            question={question}
            responseTime={15}
            onResponse={handleResponse}
            timerIsOver={onNextStep}
            onNextStep={onNextStep}
          />
          <ButtonGroup className='min-w-96 mt-4'>
            {isLast ? (
              <ButtonRoot
                onClick={onNextStep}
                className='w-24 bg-purple-600 hover:bg-purple-700'
              >
                <ButtonText>Finalizar</ButtonText>
              </ButtonRoot>
            ) : (
              <ButtonRoot onClick={onNextStep}>
                <ButtonText>Próximo</ButtonText>
              </ButtonRoot>
            )}
          </ButtonGroup>
        </>
      ) : (
        false
      )}
    </div>
  );
};
