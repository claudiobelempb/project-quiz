import { LinkRoot, LinkText } from '@/LinkRoot';
import { Statistic } from '@/components/Statistic';
import { useRouter } from 'next/router';
import { FaAngleLeft } from 'react-icons/fa';

export default function ResultPage() {
  const router = useRouter();
  const total = router.query.total;
  const correct = router.query.asnswerCorrect;

  let percentage;
  let wrong;
  if (total !== undefined && correct !== undefined) {
    percentage = Math.round((+correct / +total) * 100);
    wrong = +total - +correct;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 bg-purple-500`}
    >
      <h1 className='text-4xl font-bold mb-4'>Resultado Final</h1>
      <div className='flex flex-col gap-4 md:flex-row'>
        <Statistic
          value={`${total}`}
          descriptin='Perguntas'
          color='text-gray-700'
          bg='bg-yellow-500'
        />
        <Statistic
          value={`${correct}`}
          descriptin='corretas'
          color='text-gray-700'
          bg='bg-green-400'
        />
        <Statistic
          value={`${percentage}%`}
          descriptin='Percentual'
          color='text-gray-700'
          bg='bg-red-400'
        />
      </div>
      <LinkRoot
        className='bg-purple-700 hover:-translate-y-1 
        hover:scale-105
        duration-300 hover:bg-purple-800'
        href='/'
      >
        <LinkText className='font-semibold flex items-center gap-2'>
          <FaAngleLeft />
          Tentar Novamente
        </LinkText>
      </LinkRoot>
    </main>
  );
}
