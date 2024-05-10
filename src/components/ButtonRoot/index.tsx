import { ComponentProps } from 'react';

type ButtonRootProps = {} & ComponentProps<'button'>;

export const ButtonRoot: React.FC<ButtonRootProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${className} bg-purple-700 px-3 py-2 rounded-md`}
    >
      {children}
    </button>
  );
};

type ButtonTextProps = {} & ComponentProps<'span'>;

export const ButtonText: React.FC<ButtonTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span {...props} className={` ${className}`}>
      {children}
    </span>
  );
};

type ButtonGroupProps = {} & ComponentProps<'div'>;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return <div className={`${className}`}>{children}</div>;
};
