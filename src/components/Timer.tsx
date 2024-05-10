import { ComponentProps } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type TimerProps = {
  key: number;
  responseTime: number;
  timerIsOver: () => void;
} & ComponentProps<'div'>;
export const Timer: React.FC<TimerProps> = ({
  responseTime,
  timerIsOver,
  ...props
}) => {
  return (
    <div {...props} className='text-4xl mb-4'>
      <CountdownCircleTimer
        size={100}
        duration={responseTime}
        isPlaying
        onComplete={timerIsOver}
        colors={['#16A34A', '#EAB308', '#DC2626']}
        colorsTime={[10, 6, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};
