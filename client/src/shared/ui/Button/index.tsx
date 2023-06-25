import { ComponentProps, ElementType } from 'react';

import style from './button.module.scss';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string | string[] | JSX.Element | JSX.Element[];
  classes?: string;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export function Button<E extends ElementType = typeof defaultElement>({
  children,
  classes,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;
  const ButtonClasses = classes ? classes : style.button;

  return (
    <TagName className={ButtonClasses} {...otherProps}>
      {children}
    </TagName>
  );
}
