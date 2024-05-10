import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkRootProps = {} & ComponentProps<'a'>;

export const LinkRoot: React.FC<LinkRootProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`${className} flex justify-center items-center px-3 py-2 rounded-md  `}
      href={href ?? '/'}
    >
      {children}
    </Link>
  );
};

type LinkTextProps = {} & ComponentProps<'span'>;

export const LinkText: React.FC<LinkTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span {...props} className={`${className}`}>
      {children}
    </span>
  );
};
