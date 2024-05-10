import { LoadingRoot, LoadingSvg } from '@/components/LoandingRoot';
import { Quiz } from '@/components/quiz/quiz';
import QuestionModel from '@/models/QuestionModel';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const BASE_URL = 'http://localhost:3000/api';
export default function Home() {
  const [idsWithQuestions, setIdsWithQuestions] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>({} as QuestionModel);
  const [asnswerCorrect, setAsnswerCorrect] = useState<number>(0);
  const [loading, setIsloading] = useState(false);

  const router = useRouter();

  async function loadingIdsWithQuestions() {
    setIsloading(true);
    const response = await fetch(`${BASE_URL}/quiz`);
    const idsWithQuestion = await response.json();
    setIdsWithQuestions(idsWithQuestion);
    setIsloading(false);
  }

  async function loadingQuestions(id: number) {
    setIsloading(true);
    const response = await fetch(`${BASE_URL}/questions/${id}`);
    const json = await response.json();
    const newQuestion = QuestionModel.toEntity(json);
    setQuestion(newQuestion);
    setIsloading(false);
  }

  useEffect(() => {
    loadingIdsWithQuestions();
  }, []);

  useEffect(() => {
    idsWithQuestions.length > 0 && loadingQuestions(idsWithQuestions[0]);
  }, [idsWithQuestions]);

  function handleResponse(q: QuestionModel) {
    setQuestion(q);
    const correct = q.correct;
    setAsnswerCorrect(asnswerCorrect + (correct ? 1 : 0));
  }

  function nextResponse() {
    if (question) {
      const nextIndex = idsWithQuestions.indexOf(question.id) + 1;
      return idsWithQuestions[nextIndex];
    }
  }

  function handleNextStep() {
    const nextId = nextResponse();
    nextId ? nextQuestion(nextId) : gameOver();
  }

  function nextQuestion(nexId: number) {
    loadingQuestions(nexId);
  }

  function gameOver() {
    router.push({
      pathname: '/result',
      query: {
        total: idsWithQuestions.length,
        asnswerCorrect: asnswerCorrect
      }
    });
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 bg-purple-500 ${poppins.className}`}
    >
      {!loading ? (
        <Quiz
          question={question}
          isLast={nextResponse() === undefined}
          onReponseQuestion={handleResponse}
          onNextStep={handleNextStep}
        />
      ) : (
        <LoadingRoot>
          <LoadingSvg className='text-purple-950 w-20 h-20' />
        </LoadingRoot>
      )}
    </main>
  );
}
