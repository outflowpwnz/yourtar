import { ButtonHTMLAttributes, useMemo } from 'react';
import './style.scss';
import { useBemCN } from '../../hooks';

export enum EButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export enum EButtonSize {
  BIG = 'big',
  SMALL = 'small'
}

type TProps = {
  theme?: EButtonTheme,
  size?: EButtonSize,
  label: string,
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: TProps) => {
  const buttonBlock = useBemCN('button')
  return (
    <button
      className={buttonBlock({ size: props.size, theme: props.theme })}
      {...props}
    >
      {props.label}
    </button>
  )
}