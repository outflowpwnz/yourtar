import { Dispatch, FormEvent, HTMLInputTypeAttribute } from 'react';
import { useBemCN } from '../../hooks';
// import { ReactComponent as ErrorIcon } from '@/shared/'
// import {  } from '@/'
import { } from '@/shared/'
import './style.scss';
import { FadeInOut } from '../FadeInOut/FadeInOut';

type Props = {
  label: string;
  type?: HTMLInputTypeAttribute;
  id: string;
  value: string;
  onInput: Dispatch<React.SetStateAction<string>>
  isError?: boolean;
  errorMessage?: string;
}

export const Field = (props: Props) => {
  const fieldBlock = useBemCN('field')
  const onInput = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement
    props.onInput(value)
  }
  return (
    <div
      className={fieldBlock()}
    >
      <input
        placeholder=' '
        id={props.id}
        onInput={onInput}
        className={fieldBlock('input')}
        type={props.type || 'text'}
      />
      <label
        htmlFor={props.id}
        className={fieldBlock('label')}
      >
        {props.label}
      </label>
      <FadeInOut isOpen={Boolean(props.isError)}>
        <span className={fieldBlock('error-message')}>
          {props.errorMessage}
        </span>
      </FadeInOut>
    </div>
  )
}