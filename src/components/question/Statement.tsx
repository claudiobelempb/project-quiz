import { ComponentProps } from 'react';

type StatementProps = {
  statement: string;
} & ComponentProps<'div'>;

export const Statement: React.FC<StatementProps> = ({
  statement,
  ...props
}) => {
  return (
    <div {...props} className='mb-6 max-w-lg'>
      <span className='flex text-2xl font-bold text-center'>{statement}</span>
    </div>
  );
};
