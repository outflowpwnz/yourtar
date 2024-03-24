import { ButtonHTMLAttributes } from 'react';
import { useBemCN } from 'shared';
import { ReactComponent as ArrowIconSmall } from 'shared/assets/icons/arrow-small.svg'
import './style.scss';

export enum EButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  QUATERNARY = 'quaternary'
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
      {
        props.theme === EButtonTheme.QUATERNARY &&
        <div className={buttonBlock('icon-wrapper')}>
          <ArrowIconSmall />
        </div>
      }
    </button>
  )
}